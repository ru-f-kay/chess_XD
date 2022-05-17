import { BOARD_SIZE } from "../const/board";
import { Coordinate, FigureData, FigureType, PlayerColor } from "../types";

// Hint: negative numSteps = num of steps down
const getStepsUp = (cell: Coordinate, numSteps: number): Coordinate[] => {
  const [row, col] = cell.split('x').map(Number);
  const multiplier = numSteps < 0 ? 1 : -1;

  return Array.from({ length: Math.abs(numSteps) }).map((_, i) => `${row+(i+1)*multiplier}x${col}` as Coordinate);
}

// Hint: negative numSteps = num of steps right
const getStepsRight = (cell: Coordinate, numSteps: number): Coordinate[] => {
  const [row, col] = cell.split('x').map(Number);
  const multiplier = numSteps < 0 ? -1 : 1;

  return Array.from({ length: Math.abs(numSteps) }).map((_, i) => `${row}x${col+(i+1)*multiplier}` as Coordinate);
}

export const getFigureStepOptions = (cell: Coordinate, { color, type }: FigureData): Coordinate[] => {
  const { rows, columns } = BOARD_SIZE;
  const [row, col] = cell.split('x').map(Number);

  switch (type) {
    case FigureType.Pawn: {
      const aboutToFirstStep =
        (color == PlayerColor.Black && row === 1) ||
        (color === PlayerColor.White && row === rows-2); // Note: last row index is rows-1

      return getStepsUp(
        cell,
        (aboutToFirstStep ? 2 : 1) * (color === PlayerColor.White ? 1 : -1)
      );
    }
    break;
    
    case FigureType.Rook: {
      return [
        ...getStepsUp(cell, rows),
        ...getStepsUp(cell, -rows),
        ...getStepsRight(cell, columns),
        ...getStepsRight(cell, -columns),
      ];
    }
    break;

    default:
      return [];
  }
}