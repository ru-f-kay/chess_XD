import { getCellKey } from "../helpers/helpers";
import { Coordinate, FigureData, FigureInfo, FigureType, PlayerColor } from "../types";

const firstRow = [
  FigureType.Rook,
  FigureType.Knight,
  FigureType.Bishop,
  FigureType.King,
  FigureType.Queen,
  FigureType.Bishop,
  FigureType.Knight,
  FigureType.Rook,
];

// Bound to exact 8x8 board size.
export const INITIAL_FIGURES = Object.freeze(new Map<Coordinate, FigureData>(
  firstRow.flatMap((fig, idx) => ([
    [getCellKey(0, 7-idx), { type: fig, color: PlayerColor.Black }],
    [getCellKey(1, idx), { type: FigureType.Pawn, color: PlayerColor.Black }],

    [getCellKey(6, idx), { type: FigureType.Pawn, color: PlayerColor.White }],
    [getCellKey(7, idx), { type: fig, color: PlayerColor.White }],
  ]))
));

export const FIGURES_INFO: Record<FigureType, FigureInfo> = {
  [FigureType.King]: { name: 'King' },
  [FigureType.Queen]: { name: 'Queen' },
  [FigureType.Rook]: { name: 'Rook' },
  [FigureType.Bishop]: { name: 'Bishop' },
  [FigureType.Knight]: { name: 'Knight' },
  [FigureType.Pawn]: { name: 'Pawn' },
};
