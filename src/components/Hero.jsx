"use client";

import Pupue from "../assets/pupue.gif";
import { useState } from "react";
import fondo from "../assets/fondo.jpg";
import "./hero.css";
import SteamStatus from "./steam/SteamStatus";

function Hero() {
  const [gameId, setGameId] = useState(null);

  const background = gameId
    ? `https://cdn.cloudflare.steamstatic.com/steam/apps/${gameId}/library_hero.jpg`
    : fondo.src;

  return (
    <section className="hero relative h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-start text-[#1C1917] pt-20">

      {/* FONDO */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          key={background}
          className="hero-background absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${background})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#FFFFFF]/70" />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10">
        <h1 className="text-center text-6xl font-grotesk font-extrabold">
          HOLA SOCIEDAD.
        </h1>

        <p className="text-4xl text-center font-bold font-grotesk">
          Soy Boris, un pibe que le gusta jugar videojuegos y aprender
          muchas cosas relacionadas con tecnología.
        </p>
      </div>

      {/* STEAM */}
      <div className="relative z-10">
        <SteamStatus onGameChange={setGameId} />
      </div>

    </section>
  );
}

export default Hero;

{/* <img src={Pupue} alt="Pupue" className="pupue" /> */}