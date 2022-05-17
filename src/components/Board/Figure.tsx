import React, { useMemo } from "react";
import { FIGURES_INFO } from "../../const/figures";
import { useFigure } from "../../hooks/useFigure";
import { getCellKey } from "../../helpers";
import { usePlayer } from "../../store/player";
import { FigureData, FigureType, PlayerColor } from "../../types";

type Props = {
  row: number,
  col: number,
  figure: FigureData,
};

export const Figure = ({ row, col, figure }: Props) => {
  const isPlayable = usePlayer(
    // isMyTurn &&
    player => player.color === figure.color
  );

  return (
    <img
      style={{ cursor: isPlayable ? 'pointer' : 'not-allowed' }}
      src={`images/chess/${figure.color}${figure.type}.png`}
      alt={FIGURES_INFO[figure.type].name}
      width={80}
      height={80}
    />
  );
};
