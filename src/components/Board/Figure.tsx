import React, { useMemo } from "react";
import { FIGURES_INFO } from "../../const/figures";
import { useFigure } from "../../hooks/useFigure";
import { getCellKey } from "../../helpers/helpers";
import { usePlayer } from "../../store/player";

type Props = {
  row: number,
  col: number,
};

export const Figure = ({ row, col }: Props) => {
  const { figure, isSelected, select, unselect } = useFigure(row, col)!;

  const isPlayable = usePlayer(
    // isMyTurn &&
    player => player.color === figure.color
  );

  console.log(`Figure(${row}x${col}): ${isSelected}, ${figure.type}`);

  return (
    <img
      onClick={isSelected ? unselect : select}
      style={{ cursor: isPlayable ? 'pointer' : 'not-allowed' }}
      src={`images/chess/${figure.color}${figure.type}.png`}
      alt={FIGURES_INFO[figure.type].name}
      width={80}
      height={80}
    />
  );
};
