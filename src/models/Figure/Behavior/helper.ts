import { MoveDirection, MoveDirectionSet } from "../../../types/figures";
import { Position, TurnResult } from "../../../types/game";
import { Board } from "../../Board";
import { BoardRow } from "../../BoardRow";
import { Figure } from "../Figure";

type Params = {
  figure: Figure;
  board: Board;
  steps: number;
  direction: MoveDirection | MoveDirectionSet;
}

const diagonalDirections = [
  MoveDirection.UpLeft,
  MoveDirection.UpRight,
  MoveDirection.DownLeft,
  MoveDirection.DownRight,
];
const straightDirections = [
  MoveDirection.Left,
  MoveDirection.Right,
  MoveDirection.Up,
  MoveDirection.Down,
];

type StepInfo = {
  stepsLeft: number;
  result: null | TurnResult;
}

export const getMovesInDirection = (params: Params): TurnResult[] => {
  const { steps, direction } = params;

  if (steps === 0) {
    return [];
  }
  switch (direction) {
    case MoveDirectionSet.Radial:
      return [...diagonalDirections, ...straightDirections].flatMap((d) => getMovesInDirection({
        ...params,
        direction: d,
      }));
    case MoveDirectionSet.Diagonal:
      return [...diagonalDirections].flatMap((d) => getMovesInDirection({
        ...params,
        direction: d,
      }));
    case MoveDirectionSet.WASD:
      return [...straightDirections].flatMap((d) => getMovesInDirection({
        ...params,
        direction: d,
      }));
  }


  const stepOffsets: [number, number] = 
      direction === MoveDirection.Up          ? [-1, 0]
    : direction === MoveDirection.Down        ? [+1, 0]
    : direction === MoveDirection.Left        ? [0, -1]
    : direction === MoveDirection.Right       ? [0, +1]
    : direction === MoveDirection.UpLeft      ? [-1, -1]
    : direction === MoveDirection.UpRight     ? [-1, +1]
    : direction === MoveDirection.DownLeft    ? [+1, -1]
    : direction === MoveDirection.DownRight   ? [+1, +1]
    : [0, 0]; // TODO: hook move


  const results: TurnResult[] = [];

  for (
    let info: null | StepInfo = stepIterationHandler({ stepsLeft: steps, result: null, }, params, stepOffsets);
    info !== null;
    info = stepIterationHandler(info, params, stepOffsets)
  ) {
    results.push(info.result!);
  }

  return results;
}

const stepIterationHandler = (
  info: StepInfo,
  { board, figure }: Pick<Params, 'board' | 'figure'>,
  [rowStepOffset, colStepOffset]: [number, number]
): null | StepInfo => {
  if (!info) return null;

  const { stepsLeft, result } = info;

  if (!result || !stepsLeft || result.kill) { // We can't penetrate figures xD
    return { stepsLeft, result: null };
  }

  const [newRow, newCol] = [result.position.row+rowStepOffset, result.position.col+colStepOffset];

  const maybeOtherFigure = board.getFigureAt(newRow, newCol);
  if (!maybeOtherFigure || maybeOtherFigure.color !== figure.color) {
    return {
      stepsLeft: stepsLeft-1,
      result: {
        position: {
          row: newRow,
          col: newCol,
        },
        kill: maybeOtherFigure,
      }
    }
  } else { // Friend figure
    return {
      stepsLeft: stepsLeft-1,
      result: null, // Can't kill friends :))
    }
  }
}
