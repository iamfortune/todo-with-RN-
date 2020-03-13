import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import GlobalStyles from 'resources/styles'

import { Header } from 'components/partial'
import { Home, Todo } from 'containers'
import { SignIn, SignUp } from 'containers/Auth'
import { GlobalMsg } from 'components/parts'

import { AuthContext } from 'contexts'

const App = () => {
  const { auth, globalMsg } = useSelector(state => ({
    auth: state.auth,
    globalMsg: state.globalMsg
  }))

  if (auth.loading) return <h1>loading...</h1>

  return (
    <AuthContext.Provider value={auth}>
      <GlobalStyles />
      <Router>
        <Switch>
          <>
            <Header/>
            <main>
              <Route exact path="/" component={Home} />
              <Route path="/auth"
                render={() => {
                  if (auth.user) { return <Redirect to="/" /> }

                  return (
                    <>
                      <Route path="/auth/sign-in" component={SignIn} />
                      <Route path="/auth/sign-up" component={SignUp} />
                    </>
                  )
                }}
              />
              <Route
                path="/(todos)/"
                render={() => {
                  if (!auth.user) { return <Redirect to="/auth/sign-in" /> }

                  return <Route path="/todos" component={Todo} />
                }}
              />
            </main>

            {globalMsg.show && <GlobalMsg message={globalMsg.message} className={globalMsg.status} />}
          </>
        </Switch>
      </Router>
    </AuthContext.Provider>
  )
}

export default App

