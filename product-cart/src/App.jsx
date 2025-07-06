import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Card from './components/page'
import brownie from '/image-brownie-desktop.jpg'

function App() {
  const product = [{
    image:"/img/image-waffle-tablet.jpg",
     name:"waffle",
     description:"affle with berries",
     price:650
  }]

  return (
    <>
    <Card/>
    </>
  )
}

export default App
