import { Board } from "../models/Board"
import { GameColor, Position } from "./game";

export enum FigureType {
  King = 'K',
  Knight = 'N',
  Queen = 'Q',
  Pawn = 'P',
  Bishop = 'B',
  Rook = 'R',
};

export type FigureConstructorPayload = {
  board: Board;
  position: Position;
  color: GameColor;
};
