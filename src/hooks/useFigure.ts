import { useCallback, useMemo } from "react";
import { getCellKey } from "../helpers/helpers";
import { useFigures } from "../store/figures";

export const useFigure = (row: number, col: number) => {
  const cellKey = useMemo(() => getCellKey(row, col), [row, col]);

  const figure = useFigures(state => state.figures.get(cellKey));
  const { selectedFigure, selectFigure, unselectFigure: unselect } = useFigures();

  const select = useCallback(() => selectFigure(cellKey), [selectFigure, cellKey]);

  const isSelected = useMemo(() => cellKey === selectedFigure, [cellKey, selectedFigure]);

  return (
    figure ? {
      figure,
      isSelected,
      select,
      unselect,
    } : null
  );
}
