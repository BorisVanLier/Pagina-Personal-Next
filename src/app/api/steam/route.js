import { NextResponse } from "next/server";
import { fetchSteamPlayer } from "../../actions/steam";

export async function GET() {
  const apiKey = process.env.STEAM_API_KEY;
  const steamId = process.env.STEAM_ID;

  const url =
    `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/` +
    `?key=${apiKey}&steamids=${steamId}`;

  try {
    const data = await fetchSteamPlayer(url);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "No se pudo consultar Steam" },
      { status: 500 }
    );
  }
}