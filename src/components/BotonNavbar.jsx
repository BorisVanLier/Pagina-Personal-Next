function BotonNavbar({ isOpen, setIsOpen }) {
  return (
    <button className="md:hidden text-2xl font-extrabold" 
    onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? "✕" : "☰"}
    </button>
  );
}

export default BotonNavbar;