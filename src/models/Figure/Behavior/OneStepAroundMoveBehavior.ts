import { MoveDirectionSet } from "../../../types/figures";
import { TurnResult } from "../../../types/game";
import { Board } from "../../Board";
import { Figure } from "../Figure";
import { getMovesInDirection } from "./helper";
import { IMoveBehavior } from "./IMoveBehavior";

export class OneStepAroundMoveBehavior implements IMoveBehavior {
  getAvailableMoves = (figure: Figure, board: Board): TurnResult[] => getMovesInDirection({
    board,
    figure,
    direction: MoveDirectionSet.WASD,
    steps: 1,
  })
}
