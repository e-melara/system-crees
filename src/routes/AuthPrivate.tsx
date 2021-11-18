import React from 'react'
import { Route, Switch } from 'react-router'

// views
import { HomePage } from 'src/views/HomePage'
// para las reparaciones
import { Reparacion } from 'src/views/Reparaciones'
import { NuevaReparacion } from 'src/views/Reparaciones/NuevaReparacion'

interface Routers {
  to?: string
  component: React.FC
}

const routes: Routers[] = [
  {
    to: '/reparaciones',
    component: Reparacion
  },
  {
    to: '/reparaciones/nueva',
    component: NuevaReparacion
  }
]

export const AuthPrivate = () => {
  return (
    <Switch>
      {routes.map(({ to, component }) => (
        <Route key={to} exact path={to} component={component} />
      ))}
      <Route path="/" exact component={HomePage} />
    </Switch>
  )
}

{
  /* <Route path="*" component={Error404} /> */
}
