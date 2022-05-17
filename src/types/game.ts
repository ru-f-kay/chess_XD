import { Figure } from "../models/Figure/Figure";

export type Position = {
  row: number,
  col: number,
};

export type BoardSize = {
  rows: number;
  columns: number;
}

export enum GameColor {
  Black = 'b',
  White = 'w',
};

export type TurnResult = {
  position: Position;
  kill: null | Figure;
}