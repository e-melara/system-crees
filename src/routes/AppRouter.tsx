import React from 'react'
import { Redirect, Switch, HashRouter as Router } from 'react-router-dom'

import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'

// Routers for type
import { AuthRouter } from './AuthRouter'
import { AuthPrivate } from './AuthPrivate'

import { Loading } from 'src/components/Loading/Loading'
import { startChecking } from 'src/redux/slicers/thunk/auth'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'

export const AppRouter = () => {
  const dispath = useAppDispatch()
  const { isAuthenticated, checking } = useAppSelector((state) => state.auth)

  React.useEffect(() => {
    if (!checking) {
      dispath(startChecking())
    }
  }, [dispath, checking])

  if (!checking) {
    return <Loading />
  }

  return (
    <Router>
      <>
        <Switch>
          <PublicRoute
            path="/auth"
            isAuthenticated={isAuthenticated}
            component={AuthRouter}
          />
          <PrivateRoute
            path="/"
            isAuthenticated={isAuthenticated}
            component={AuthPrivate}
          />
          <Redirect to="/auth/login" />
        </Switch>
      </>
    </Router>
  )
}
