import create, { UseBoundStore, StoreApi } from 'zustand';
import { BOARD_SIZE } from '../const';
import { INITIAL_FIGURES } from '../const/positions';
import { CellData } from '../types';
import { getCellKey } from './helpers';

type BoardStore = UseBoundStore<StoreApi<{
  board: Map<string, CellData>,
}>>;

export const useBoard: BoardStore = create(set => ({
  board: new Map<string, CellData>(
      Array.from({ length: BOARD_SIZE.rows }).flatMap((_, row) => 
        Array.from({ length: BOARD_SIZE.columns }).map((_, col) => {
          const cellKey = getCellKey(row, col);
          const initialFigure = INITIAL_FIGURES.get(cellKey);

          return [cellKey, { figure: initialFigure }]
        }
      )
    )),
}));
