import React from 'react'
import CartCard from './Components/CartCard'
import UserContextComponent from './utils/UserContextComponent'

export const UserContext = React.createContext()

function App() {

  return <>
    <UserContextComponent>
      <div className="container my-5">
        <CartCard/>
      </div>
    </UserContextComponent>
  </>
}

export default App