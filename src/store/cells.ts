import create, { UseBoundStore, StoreApi } from 'zustand';
import { BOARD_SIZE } from '../const/board';
import { Coordinate } from '../types';

type CellsStore = UseBoundStore<StoreApi<{
  selectedCells: Set<Coordinate>;

  selectCells: (cells: Coordinate[]) => void;
  unselectCells: () => void;
}>>;

export const useCells: CellsStore = create((set) => ({
  selectedCells: new Set(),

  selectCells: (cells: Coordinate[]) => {
    const [maxRowIndex, maxColumnIndex] = [
      BOARD_SIZE.rows,
      BOARD_SIZE.columns,
    ];

    const allowedCells = cells.filter((cell) => {
      const [row, col] = cell.split('x').map(Number);

      return row >= 0 && col >= 0 && row <= maxRowIndex && col <= maxColumnIndex;
    });

    set(state => ({
      ...state,
      selectedCells: new Set(allowedCells),
    }));
  },
  unselectCells: () => {
    set(state => ({
      ...state,
      selectedCells: new Set(),
    }));
  }
}));
