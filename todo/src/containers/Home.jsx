import React, { useContext } from 'react'

import GSt from 'resources/styles/components'

import { AuthContext } from 'contexts'

const Home = () => {
  const auth = useContext(AuthContext)

  return (
    <GSt.Container>
      <h1>Home</h1>
      { auth.user &&
        <>
          <br/>
          <p>User ID: {auth.user._id}</p>
        </>
      }
    </GSt.Container>
  )
}

export default Home