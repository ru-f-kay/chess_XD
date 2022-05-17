import { useMemo } from "react";
import { getCellKey } from "../helpers";
import { useFigures } from "../store/figures";

export const useFigure = (row: number, col: number) => {
  const cellKey = useMemo(() => getCellKey(row, col), [row, col]);

  return useFigures(state => state.figures.get(cellKey));
}
