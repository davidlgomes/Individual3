// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>home</h1>
      <Outlet/>
      <h1>Footer</h1>
    </div>
  )
}

export default App
