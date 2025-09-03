import type { Player } from "../../types";

const sortScores = (scores: Player[]): Player[] => {
  return [...scores].sort((a, b) => b.score - a.score);
};

module.exports = { sortScores };
