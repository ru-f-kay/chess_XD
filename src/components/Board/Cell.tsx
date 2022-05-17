import React, { useMemo } from 'react';
import { CELL_COLORS } from '../../const/colors';
import { useFigure } from '../../hooks/useFigure';
import { CellType } from '../../types';
import { Figure } from './Figure';


type Props = {
  row: number,
  col: number,
};

export const Cell = ({ row, col }: Props) => {
  const figure = useFigure(row, col);

  const cellType = useMemo(
    () => row % 2 === col % 2 ? CellType.Even : CellType.Odd,
    [row, col]
  );

  return (
    <div style={{ width: 80, height: 80, background: CELL_COLORS[cellType] }}>
      {figure && <Figure row={row} col={col} figure={figure} />}
      {/* <Figure color={FigureColor.Black} type={FigureType.Queen} isMine isMyTurn /> */}
    </div>
  )
}