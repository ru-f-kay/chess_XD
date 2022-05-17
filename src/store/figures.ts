import create, { UseBoundStore, StoreApi } from 'zustand';
import { INITIAL_FIGURES } from '../const/figures';
import { Coordinate, FigureData } from '../types';


type FiguresStore = UseBoundStore<StoreApi<{
  figures: Map<Coordinate, FigureData>;
  selectedFigure: null | Coordinate;

  selectFigure: (coord: Coordinate) => void;
  reset(): void;
}>>;

export const useFigures: FiguresStore = create((set, get) => ({
  figures: new Map(INITIAL_FIGURES),
  selectedFigure: null,

  selectFigure: (coord: Coordinate) => {
    const hasFigure = get().figures.get(coord);
    if (hasFigure) {
      set(state => ({ ...state, selectedFigure: coord }));
    }
  },
  reset: () => {
    set(() => ({
      figures: new Map(INITIAL_FIGURES),
      selectedFigure: null,
    }));
  },
}));
