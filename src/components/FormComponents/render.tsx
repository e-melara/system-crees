import * as React from "react";

// components
import { Familiares } from "./Familiares";
import { BienesImuebles } from "./BienesImuebles";
import { DatosGenerales } from "./DatosGenerales";

interface ElementInfaces {
  [key: number]: React.ReactElement;
}

const elements: ElementInfaces = {
  0: <DatosGenerales />,
  1: <Familiares />,
  2: <BienesImuebles />
};

export const RenderElement = (props: { keyElement: number }) => {
  return elements[props.keyElement] || elements[0];
};
