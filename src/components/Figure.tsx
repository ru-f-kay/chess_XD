import React from "react";
import { FIGURES_INFO } from "../const";
import { FigureType, PlayerColor } from "../types";

type Props = {
  type: FigureType,
  color: PlayerColor,
};

export const Figure = ({ type, color }: Props) => {
  return (
    <img
      style={{ cursor: 'not-allowed' }}
      src={`images/chess/${color}${type}.png`}
      alt={FIGURES_INFO[type].name}
      width={80}
      height={80}
    />
  );
};
