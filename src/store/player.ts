import create, { UseBoundStore, StoreApi } from "zustand";
import { PlayerColor } from "../types";

type PlayerStore = UseBoundStore<StoreApi<{
  color: null | PlayerColor;
}>>;

export const usePlayer: PlayerStore = create(set => ({
  color: PlayerColor.White,

  setColor: (color: PlayerColor) => {
    set(state => ({ ...state, color }));
  }
}));
