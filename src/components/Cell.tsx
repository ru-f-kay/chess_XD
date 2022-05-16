import React, { useMemo } from 'react';
import { CELL_COLORS } from '../const/colors';
import { useBoard } from '../store/board';
import { getCellKey } from '../store/helpers';
import { CellType } from '../types';
import { Figure } from './Figure';


type Props = {
  row: number,
  col: number,
};

export const Cell = ({ row, col }: Props) => {
  const cellKey = useMemo(() => getCellKey(row, col), [row, col]);
  const cellType = useMemo(() => row % 2 === col % 2 ? CellType.Even : CellType.Odd, [row, col]);

  const figure = useBoard(state => state.board.get(cellKey)?.figure);

  return (
    <div style={{ width: 80, height: 80, background: CELL_COLORS[cellType] }}>
      {figure && <Figure color={figure.color} type={figure.type} />}
      {/* <Figure color={FigureColor.Black} type={FigureType.Queen} isMine isMyTurn /> */}
    </div>
  )
}