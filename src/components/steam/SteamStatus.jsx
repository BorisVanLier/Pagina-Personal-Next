"use client";

import { useEffect, useRef, useState } from "react";
import SteamCard from "./SteamCard";
import SteamExplosion from "./SteamExplosion";
import "./steamAnimations.css";

export default function SteamStatus({ onGameChange }) {
  const [steam, setSteam] = useState(null);
  const [animation, setAnimation] = useState("");
  const [explosion, setExplosion] = useState(false);

  const steamRef = useRef(null);
  const timersRef = useRef([]);

  async function getSteamStatus() {
    try {
      const response = await fetch("/api/steam", {
        cache: "no-store",
      });

      const data = await response.json();

      const previous = steamRef.current;

      // Primera carga
      if (previous === null) {
        steamRef.current = data;
        setSteam(data);

        onGameChange?.(
          data.playing ? data.gameId : null
        );

        return;
      }

      // 😨 Desconectado → 😛 Jugando
      if (!previous.playing && data.playing) {
        setAnimation("destroy");

        timersRef.current.forEach(clearTimeout);

        timersRef.current.push(
          setTimeout(() => {
            setExplosion(true);

            steamRef.current = data;
            setSteam(data);

            onGameChange?.(data.gameId);

            setAnimation("appear");
          }, 600)
        );

        timersRef.current.push(
          setTimeout(() => {
            setExplosion(false);
            setAnimation("");
          }, 1800)
        );

        return;
      }

      // 😛 Jugando → 😨 Desconectado
      if (previous.playing && !data.playing) {
        steamRef.current = data;
        setSteam(data);

        onGameChange?.(null);

        setAnimation("");

        return;
      }

      // Juego cambiado
      if (
        previous.playing &&
        data.playing &&
        previous.gameId !== data.gameId
      ) {
        steamRef.current = data;
        setSteam(data);

        onGameChange?.(data.gameId);

        return;
      }

      // Cualquier otro cambio
      steamRef.current = data;
      setSteam(data);

    } catch (error) {
      console.error("Error obteniendo Steam:", error);
    }
  }

  useEffect(() => {
    getSteamStatus();

    const interval = setInterval(getSteamStatus, 30000);

    return () => {
      clearInterval(interval);

      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, []);

  if (!steam) {
    return (
      <section className="mt-10 w-full px-5">
        <div className="mx-auto w-full max-w-4xl border border-white/20 bg-[#292522] p-8 text-white">
          Cargando estado de Steam...
        </div>
      </section>
    );
  }

  return (
    <section className="relative mt-10 mb-16 w-full px-5">
      <div className="relative mx-auto w-full max-w-4xl">

        <SteamCard
          steam={steam}
          animation={animation}
        />

        <SteamExplosion visible={explosion} />

      </div>
    </section>
  );
}