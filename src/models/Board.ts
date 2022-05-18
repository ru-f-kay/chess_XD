import { BoardSize, GameColor, TurnResult } from "../types/game";
import { BoardRow } from "./BoardRow";
import { Figure } from "./Figure/Figure";


export class Board {
  readonly playerColor: GameColor;
  readonly size: BoardSize;
  readonly rows: BoardRow[];
  activePlayer: null | GameColor = null;
  selectedFigure: null | Figure = null;

  constructor(size: BoardSize, playerColor: GameColor) {
    this.playerColor = playerColor;
    this.size = size;
    this.rows = Array.from({ length: size.rows }).map((_, rowIndex) =>
      new BoardRow({
        rowIndex,
        length: size.columns,
        board: this
      }));
  }

  getFigureAt = (row: number, col: number) => {
    if (row >= this.rows.length) {
      return null;
    }
    return this.rows[row].getFigureAt(col);
  }

  startGame = () => {
    this.activePlayer = GameColor.White;
  }

  makeMove(figure: Figure, turnResult: TurnResult) {
    throw new Error("Method not implemented.");
  }
}
