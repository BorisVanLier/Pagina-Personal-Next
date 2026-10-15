'use server'

export async function fetchSteamPlayer(url) {
  try {
    const response = await fetch(url, { cache: "no-store" });
    const data = await response.json();
    const player = data.response.players[0];

    return {
      playing: Boolean(player.gameid),
      game: player.gameextrainfo || null,
      gameId: player.gameid || null,
      avatar: player.avatarfull || null,
      profile: player.profileurl || null,
    };
  } catch (error) {
    console.error(error);
    throw error; // sube a route.js
  }
}