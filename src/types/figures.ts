import { Board } from "../models/Board"
import { BoardRow } from "../models/BoardRow";
import { GameColor, Position } from "./game";

export enum FigureType {
  King = 'K',
  Knight = 'N',
  Queen = 'Q',
  Pawn = 'P',
  Bishop = 'B',
  Rook = 'R',
};

export enum MoveDirection {
  Up,
  Down,
  Left,
  Right,
  UpLeft,
  UpRight,
  DownLeft,
  DownRight,
  Hook,
}

export enum MoveDirectionSet {
  Radial = 'radial',
  WASD = 'wasd',
  Diagonal = 'diagonal',
}

export type FigureConstructorPayload = {
  board: Board;
  row: BoardRow;
  position: Position;
  color: GameColor;
};
