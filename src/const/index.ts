import { FigureInfo, FigureType } from "../types";

export const FIGURES_INFO: Record<FigureType, FigureInfo> = {
  [FigureType.King]: { name: 'King' },
  [FigureType.Queen]: { name: 'Queen' },
  [FigureType.Rook]: { name: 'Rook' },
  [FigureType.Bishop]: { name: 'Bishop' },
  [FigureType.Knight]: { name: 'Knight' },
  [FigureType.Pawn]: { name: 'Pawn' },
};

export const BOARD_SIZE = {
  rows: 8,
  columns: 8,
};
