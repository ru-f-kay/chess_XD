import { MoveDirectionSet } from "../../../types/figures";
import { TurnResult } from "../../../types/game";
import { Board } from "../../Board";
import { Figure } from "../Figure";
import { getMovesInDirection } from "./helper";
import { IMoveBehavior } from "./IMoveBehavior";

export class DiagonalMoveBehavior implements IMoveBehavior {
  getAvailableMoves = (figure: Figure, board: Board): TurnResult[] => getMovesInDirection({
    board,
    figure,
    direction: MoveDirectionSet.Diagonal,
    steps: Math.max(board.size.columns, board.size.rows),
  })
}
