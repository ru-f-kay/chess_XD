import { filterNotEmpty } from "../../../utils/common";
import { MoveDirection } from "../../../types/figures";
import { GameColor, TurnResult } from "../../../types/game";
import { Board } from "../../Board";
import { Figure } from "../Figure";
import { getMovesInDirection, getTurnResultInOffset } from "./helper";
import { IMoveBehavior } from "./IMoveBehavior";

export class PawnMoveBehavior implements IMoveBehavior {
  getAvailableMoves = (figure: Figure, board: Board): TurnResult[] => {
    const maxStepsForward = figure.turnsMade === 0 ? 2 : 1;
    const direction = figure.color === GameColor.White ? MoveDirection.Up : MoveDirection.Down;

    const resultsForward = getMovesInDirection({
      board,
      figure,
      direction,
      steps: maxStepsForward,
    });

    const killOffsetPairs: [number, number][] = direction === MoveDirection.Up ? [
      [-1, -1],
      [-1, +1],
    ] : [
      [+1, -1],
      [+1, +1],
    ];

    // TS compiler can't believe :(
    // @ts-ignore
    const resultsKill: TurnResult[] = killOffsetPairs.map(offsets => getTurnResultInOffset(
      board,
      { ...figure.position, color: figure.color },
      offsets
    )).filter(Boolean);

    return [...resultsForward, ...resultsKill];
  }
}
