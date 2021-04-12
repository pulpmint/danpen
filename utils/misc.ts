import { SHOT_COUNT } from "../constants/localStorage";

export const getShotCount = (): number => {
  const count = parseInt(localStorage.getItem(SHOT_COUNT));
  return isNaN(count) ? 0 : count;
};
