'use server'

export async function fetchSteamPlayer(url) {
  // Una action es un endpoint público: sin esto, cualquiera podría
  // hacer que tu servidor pida cualquier URL.
  if (!url.startsWith("https://api.steampowered.com/")) {
    throw new Error("URL no permitida");
  }

  const response = await fetch(url, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Steam respondió con ${response.status}`);
  }

  const data = await response.json();
  const player = data.response.players?.[0];

  if (!player) {
    return { playing: false };
  }

  return {
    playing: Boolean(player.gameid),
    game: player.gameextrainfo || null,
    gameId: player.gameid || null,
    avatar: player.avatarfull || null,
    profile: player.profileurl || null,
  };
}