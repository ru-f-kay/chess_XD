import { BoardSize, GameColor } from "../types/game";
import { BoardRow } from "./BoardRow";
import { Figure } from "./Figure/Figure";


export class Board {
  private rows: BoardRow[];

  readonly playerColor: GameColor;
  readonly size: BoardSize;
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

  startGame = () => {
    this.activePlayer = GameColor.White;
  }
}
