import { TurnResult } from "../../../types/game";
import { Board } from "../../Board";
import { Figure } from "../Figure";
import { getTurnResultInOffset } from "./helper";
import { IMoveBehavior } from "./IMoveBehavior";

export class HookMoveBehavior implements IMoveBehavior {
  getAvailableMoves = (figure: Figure, board: Board): TurnResult[] => {
    const hookMoveOffsets: [number, number][] = [
      [-2, +1], [-2, -1],
      [+2, -1], [+2, +1],
      [-1, -2], [+1, -2],
      [-1, +2], [+1, +2],
    ]

    // checked for null but TS compiler is not smart enough :( But I still love it <3
    // @ts-ignore
    return hookMoveOffsets.map(
      offset => getTurnResultInOffset(
        board,
        { ...figure.position, color: figure.color },
        offset
      )
    ).filter(Boolean);
  }
}
