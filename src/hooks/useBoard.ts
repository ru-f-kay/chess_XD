import { useCells } from "../store/cells";
import { useFigures } from "../store/figures"
import { usePlayer } from "../store/player";

export const useBoard = () => {
  const playerColor = usePlayer(state => state.color);
  const { selectedCells, selectCells, unselectCells } = useCells();
  const { figures, selectedFigure, selectFigure } = useFigures();

  return {
    figures,
    selectedFigure,
    selectFigure,
  };
}
