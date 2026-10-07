export default function SteamCard({ steam, animation }) {
  return (
    <div
      className={`steam-card relative z-10 border border-white/20 bg-[#292522] p-8 text-white ${
        animation === "destroy"
          ? "steam-destroy"
          : animation === "appear"
            ? "steam-appear"
            : ""
      }`}
    >

      {/* CABECERA */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="font-grotesk text-3xl font-bold text-white">
          Steam
        </h2>

        <span className="text-base">
          {steam.playing ? "😛 Viciando" : "😨 Desconectado"}
        </span>
      </div>


      {/* PERFIL */}
      <div className="flex items-center gap-8">

        {steam.avatar && (
          <img
            src={steam.avatar}
            alt="Avatar de Steam"
            className="h-32 w-32 shrink-0 border border-white/30 object-cover"
          />
        )}

        <div className="min-w-0">

          <p className="text-base text-gray-300">
            Boros está jugando
          </p>

          <h3 className="font-grotesk text-4xl font-bold text-white">
            {steam.playing ? steam.game : "Nada por ahora"}
          </h3>

          {steam.playing && (
            <p className="mt-2 text-gray-300">
              Jugando ahora mismo
            </p>
          )}

          {steam.profile && (
            <a
              href={steam.profile}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-base text-blue-300 hover:underline"
            >
              Ver perfil →
            </a>
          )}

        </div>
      </div>


      {/* INFO EXTRA */}
      {steam.playing && (
        <div className="steam-info mt-8 border-t border-white/20 pt-5">

          <p className="text-sm text-gray-400">
            ESTADO ACTUAL
          </p>

          <p className="font-grotesk text-xl font-bold text-white">
            🎮 {steam.game}
          </p>

          <p className="mt-1 text-sm text-gray-300">
            Boros está viciando en este momento.
          </p>

        </div>
      )}

    </div>
  );
}