import React, { useMemo } from 'react';
import { CELL_COLORS } from '../../const/colors';
import { useCell } from '../../hooks/useCell';
import { useFigure } from '../../hooks/useFigure';
import { CellType } from '../../types';
import { Figure } from './Figure';


type Props = {
  row: number,
  col: number,
};

export const Cell = ({ row, col }: Props) => {
  const { hasFigure, isSelected, moveFigureHere } = useCell(row, col);

  const cellType = useMemo(
    () => row % 2 === col % 2 ? CellType.Even : CellType.Odd,
    [row, col]
  );

  return (
    <div style={{ position: 'relative', width: 80, height: 80, background: CELL_COLORS[cellType] }}>
      {isSelected && (
        <div
          onClick={moveFigureHere}
          style={{
            left: 5,
            top: 5,
            width: 70,
            height: 70,
            opacity: hasFigure ? 0.2 : 0.9,
            position: 'absolute',
            background: 'green',
        }}>
          &nbsp;
        </div>
      )}
      {hasFigure && <Figure row={row} col={col} />}
    </div>
  )
}