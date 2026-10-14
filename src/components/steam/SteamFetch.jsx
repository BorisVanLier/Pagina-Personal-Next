export async function fetchSteamStatus() {
  try {
    const response = await fetch("/api/steam", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Error consultando Steam");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error obteniendo Steam:", error);
    return null;
  }
}