import React from "react";
import { FIGURES_INFO } from "../const";
import { FigureColor, FigureType } from "../types";

type Props = {
  type: FigureType,
  color: FigureColor,
};

export const Figure = ({ type, color }: Props) => {
  return (
    <img
      src={`images/chess/${color}${type}.png`}
      alt={FIGURES_INFO[type].name}
      width={80}
      height={80}
    />
  );
};
