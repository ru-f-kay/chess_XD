import { useEffect } from "react";
import { getFigureStepOptions } from "../helpers/calculate";
import { useCells } from "../store/cells";
import { useFigures } from "../store/figures"

// Temporary hook to move data outside of <App>
export const useGameLogic = () => {
  const { selectCells, unselectCells } = useCells();
  const { selectedFigure, figures, unselectFigure } = useFigures();

  useEffect(() => {
    console.log(selectedFigure);
    if (selectedFigure && figures.has(selectedFigure)) {
      const figure = figures.get(selectedFigure)!;

      const cellsToSelect = getFigureStepOptions(selectedFigure, figure);

      selectCells([...cellsToSelect, selectedFigure]);
    } else {
      unselectCells();
    }
  }, [selectedFigure]);

  return {
  };
}
