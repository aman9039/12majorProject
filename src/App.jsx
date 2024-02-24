import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  console.log(process.njt.REACT_APP_APPWRITE_URL);
  return (
    <>
      <h1>blog write app </h1>
    </>
  )
}

export default App
