import { Coordinate } from "./types";

export const getCellKey = (row: number, col: number): Coordinate => `${row}x${col}`;
