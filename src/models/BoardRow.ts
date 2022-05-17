import { FigureType } from "../types/figures";
import { GameColor } from "../types/game";
import { Board } from "./Board";
import { Figure } from "./Figure/Figure"

const initialFigures = [
  FigureType.Rook,
  FigureType.Knight,
  FigureType.Bishop,
  FigureType.Queen,
  FigureType.King,
  FigureType.Bishop,
  FigureType.Knight,
  FigureType.Rook,
]

type Cell = {
  figure: null | Figure;
}

type ConstructorPayload = {
  rowIndex: number;
  length: number;
  board: Board;
}

export class BoardRow {
  private readonly board: Board;
  private readonly index: number;

  private cells: Cell[];

  constructor({ rowIndex, length, board }: ConstructorPayload) {
    this.board = board;
    this.index = rowIndex;

    this.cells = Array.from({ length }).map(() => ({ figure: null }));
  }

  fillWithFigures = (color: GameColor) => {
    const { board } = this;
    const figures = color === GameColor.Black ? initialFigures.reverse() : initialFigures;

    this.cells = this.cells.map((_, i) => ({
      figure: Figure.create(figures[i], {
        color,
        board,
        position: {
          row: this.index,
          col: i,
        },
      }),
    }));
  }

  fillWithPawns = (color: GameColor) => {
    const { board } = this;

    this.cells = this.cells.map((_, i) => ({
      figure: Figure.create(FigureType.Pawn, {
        color,
        board,
        position: {
          row: this.index,
          col: i,
        }
      })
    }));
  }
}