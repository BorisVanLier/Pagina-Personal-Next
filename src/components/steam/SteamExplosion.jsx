export default function SteamExplosion({ visible }) {
  if (!visible) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-[9999] flex items-center justify-center">
      <img
        src="/explosion.gif"
        alt="Explosión"
        className="h-[700px] w-[700px] object-contain"
      />
    </div>
  );
}