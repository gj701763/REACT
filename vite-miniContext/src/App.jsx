import { useState } from 'react'
import UserContexProvider from './Contex/UserContexProvider'
import "./App.css"
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContexProvider>
      <h1> Hi! it's me Gajanan</h1>
      <Login />
     <Profile />
    </UserContexProvider>
  )
}

export default App
