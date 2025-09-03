import type { Player } from "../../../types";
import {BASE_URL} from "../constants/constants"

export const getScores = async (): Promise<Player[]> => {
  try {
    const res = await fetch(`${BASE_URL}/scores`);
    if (!res.ok) {
      throw new Error(`Failed to fetch scores: ${res.status}`);
    }
    const data: Player[] = await res.json();
    return data;
  } catch (e) {
    console.error("Error fetching scores:", e);
    return [];
  }
};

export const postPlayer = async (player: Player): Promise<Player | null> => {
  try {
    const res = await fetch(`${BASE_URL}/player`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(player),
    });
    if (!res.ok) {
      throw new Error(`Failed to post score: ${res.status}`);
    }
    const data: Player = await res.json();
    return data;
  } catch (e) {
    console.error("Error posting score:", e);
    return null
  }
};
