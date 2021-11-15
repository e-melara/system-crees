import * as React from 'react'

// components
import { Equipos } from './Equipos'
import { CentroEscolar } from './CentroEscolar'
import { Details } from './Details'
import { PersonasProcedencia } from './PersonasProcedencia'

interface ElementInfaces {
  [key: number]: React.ReactElement
}

const elements: ElementInfaces = {
  0: <CentroEscolar />,
  1: <Equipos />,
  2: <PersonasProcedencia />,
  3: <Details />
}

export const RenderElement = (props: { keyElement: number }) => {
  return elements[props.keyElement] || elements[0]
}
