import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.STEAM_API_KEY;
  const steamId = process.env.STEAM_ID;

  const url =
    `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/` +
    `?key=${apiKey}&steamids=${steamId}`;

  try {
    const response = await fetch(url, {
      cache: "no-store",
    });

    const data = await response.json();
    const player = data.response.players?.[0];

    if (!player) {
      return NextResponse.json({
        playing: false,
      });
    }

    return NextResponse.json({
      playing: Boolean(player.gameid),
      game: player.gameextrainfo || null,
      gameId: player.gameid || null,
      avatar: player.avatarfull || null,
      profile: player.profileurl || null,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "No se pudo consultar Steam" },
      { status: 500 }
    );
  }
}