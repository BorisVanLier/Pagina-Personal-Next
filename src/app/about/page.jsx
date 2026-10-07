import Carrusel from "../../components/Carrusel";

import fondo from "../../assets/fondo.jpg";

import { Juegos } from "../../data/juegos.jsx";
import { Album } from "../../data/album.jsx";
import { Anime } from "../../data/anime.jsx";

export default function About() {
  
  
  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-start px-10 py-10"
      style={{ backgroundImage: `url(${fondo.src})` }}>
<div className="absolute inset-0 bg-[#FFFFFF]/70"></div>

<div className="relative z-10 w-full">
  <h2 className="text-center text-xl font-grotesk font-extralight mb-8">
    SOBRE MÍ
  </h2>

  <div className="flex items-center gap-6 mb-12">
    <div className="h-px flex-1 bg-[#292522]/50"></div>

    <h2 className="text-4xl font-grotesk font-extrabold">
      JUEGOS FAVORITOS
    </h2>

    <div className="h-px flex-1 bg-[#292522]/50"></div>
  </div>

  <Carrusel items={Juegos} proporcion="aspect-[2/3]"/>

  <div className="flex items-center gap-6 mb-12 mt-10">
    <div className="h-px flex-1 bg-[#292522]/50"></div>

    <h2 className="text-4xl font-grotesk font-extrabold">
      ALBUMES FAVORITOS
    </h2>

    <div className="h-px flex-1 bg-[#292522]/50"></div>
  </div>

  <Carrusel items={Album} proporcion="aspect-square"/>
    <div className="flex items-center gap-6 mb-12 mt-10">
    <div className="h-px flex-1 bg-[#292522]/50"></div>

    <h2 className="text-4xl font-grotesk font-extrabold">
      ANIMES FAVORITOS
    </h2>

    <div className="h-px flex-1 bg-[#292522]/50"></div>
  </div>

  <Carrusel items={Anime} proporcion="aspect-[9/14]"/>
</div>

    </main>
  );
}
