import { getCellKey } from "../store/helpers";
import { FigureData, FigureType, PlayerColor } from "../types";

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

export const INITIAL_FIGURES = Object.freeze(new Map<string, FigureData>(
  firstRow.flatMap((fig, idx) => ([
    [getCellKey(0, 7-idx), { type: fig, color: PlayerColor.Black }],
    [getCellKey(1, idx), { type: FigureType.Pawn, color: PlayerColor.Black }],

    [getCellKey(6, idx), { type: FigureType.Pawn, color: PlayerColor.White }],
    [getCellKey(7, idx), { type: fig, color: PlayerColor.White }],
  ]))
));
