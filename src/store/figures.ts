import create, { UseBoundStore, StoreApi } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { INITIAL_FIGURES } from '../const/figures';
import { Coordinate, FigureData } from '../types';


type FiguresStore = UseBoundStore<StoreApi<{
  figures: Map<Coordinate, FigureData>;
  selectedFigure: null | Coordinate;

  selectFigure: (coord: Coordinate) => void;
  moveFigure: (from: Coordinate, to: Coordinate) => void;
  unselectFigure: () => void;
  reset(): void;
}>>;

export const useFigures: FiguresStore = create(subscribeWithSelector((set, get) => ({
  figures: new Map(INITIAL_FIGURES),
  selectedFigure: null,

  selectFigure: (coord: Coordinate) => {
    console.log(`SelectFigure:: ${coord}`);
    const hasFigure = get().figures.get(coord);
    if (hasFigure) {
      set(state => ({ ...state, selectedFigure: coord }));
    }
  },
  unselectFigure: () => {
    set(state => ({ ...state, selectedFigure: null }));
  },
  reset: () => {
    set(() => ({
      figures: new Map(INITIAL_FIGURES),
      selectedFigure: null,
    }));
  },
  moveFigure: (from: Coordinate, to: Coordinate) => {
    const figures = new Map(get().figures);
    const fig = figures.get(from)!;
    figures.delete(from);

    figures.set(to, fig);

    set(state => ({
      ...state,
      selectedFigure: null,
      figures,
    }));
  }
})));
