import Card from "./Card";

function Carrusel({ items, proporcion }) {
  return (
    <div className="border border-[#292522]/40 rounded-2xl p-4">
      
      <div className="flex gap-6 overflow-x-auto px-4 py-6">
        {items.map((item, index) => (
          <Card
            key={item.id}
            titulo={item.titulo}
            descripcion={item.descripcion}
            imagen={item.imagen}
            delay={index * 150}
            proporcion={proporcion}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Carrusel;