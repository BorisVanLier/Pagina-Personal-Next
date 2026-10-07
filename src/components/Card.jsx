function Card({
  titulo,
  descripcion,
  imagen,
  delay,
  proporcion,
  link,
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ animationDelay: `${delay}ms` }}
      className="
        w-72 min-w-72
        overflow-hidden rounded-xl border
        bg-white
        opacity-0
        animate-[aparecer_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]
        hover:scale-105
        transition-transform
        cursor-pointer
      "
    >
      <div className={`w-full ${proporcion}`}>
        <img
          src={imagen.src}
          alt={titulo}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold">
          {titulo}
        </h2>

        <p className="mt-2 text-gray-600">
          {descripcion}
        </p>
      </div>
    </a>
  );
}

export default Card;