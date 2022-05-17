import { useCallback, useMemo } from "react";
import { getCellKey } from "../helpers/helpers"
import { useCells } from "../store/cells";
import { useFigures } from "../store/figures";
import { useFigure } from "./useFigure";

export const useCell = (row: number, col: number) => {
  const cellKey = getCellKey(row, col);
  const { selectedCells, unselectCells } = useCells();
  const { selectedFigure, moveFigure } = useFigures();

  const figure = useFigure(row, col);

  const isSelected = useMemo(() => selectedCells.has(cellKey), [selectedCells]);
  const hasFigure = useMemo(() => Boolean(figure), [figure]);

  const moveFigureHere = useCallback(() => {
    if (isSelected && selectedFigure) {
      moveFigure(selectedFigure, cellKey);
      unselectCells();
    }
  }, [isSelected, selectedFigure]);

  return {
    isSelected,
    hasFigure,
    moveFigureHere,
  };
}
