import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Card from './components/page'

import brownie from '/image-brownie-mobile.jpg'
import brownie2 from '/image-brownie-desktop.jpg'
import waffle from '/image-waffle-mobile.jpg'
import mobilewaffle from '/image-waffle-desktop.jpg'
import cartimage from '/icon-add-to-cart.svg'
import baklava from '/image-baklava-mobile.jpg'
import mobilebaklava from '/image-baklava-desktop.jpg'
import meringue from '/image-meringue-mobile.jpg'
import mobilemeringue from '/image-meringue-desktop.jpg'
import panna from '/image-panna-cotta-mobile.jpg'
import mobilepanna from '/image-panna-cotta-desktop.jpg'
import cake from '/image-cake-mobile.jpg'
import mobilecake from '/image-cake-desktop.jpg'
import brulee from '/image-creme-brulee-mobile.jpg'
import mobilebrulee from '/image-creme-brulee-desktop.jpg'
import tiramisu from '/image-tiramisu-mobile.jpg'
import mobiletiramisu from '/image-tiramisu-desktop.jpg'
import macaron from '/image-macaron-mobile.jpg'
import mobilemacaron from '/image-macaron-desktop.jpg'


function App() {
  console.log();
  
  const product = [{
     id:1,
    desktopimg:mobilewaffle,
    mobileimg: waffle,
     name:"waffle",
     desc:"affle with berries",
     price:650
  },{
      id:2,
    desktopimg:mobilebaklava,
    mobileimg:baklava,
     name:" Baklava",
     desc:"Pistachio Baklava",
     price:400
     
},{
      id:3,
    desktopimg:mobilemeringue,
    mobileimg:meringue,
     name:"pie",
     desc:"lemon Meringue pie",
     price:500
},{
      id:4,
      desktopimg:mobilepanna,
      mobileimg:panna,
     name:"Panna Cotta",
     desc:" Vanilla Panna Cotta",
     price:650
},
{ 
      id:5,
     desktopimg: brownie2,
     mobileimg: brownie,
     name:"Brownie",
     desc:"Salted Caramel Brownie",
     price:550  
},{
      id:6,
     desktopimg:mobilecake,
     mobileimg:cake,
     name:"Cake",
     desc:"Red Velvet Cake",
     price:450 
},{
      id:7,
    desktopimg:mobilebrulee,
    mobileimg:brulee,
     name:" Creme Brulee",
     desc:"Vanilla Bean Creme Brulee",
     price:700
},{
      id:8,
    desktopimg:mobiletiramisu,
    mobileimg:tiramisu,
     name:" Tiramisu",
     desc:"Classic Tiramisu",
     price:550
},{
      id:9,
    desktopimg:mobilemacaron,
    mobileimg:macaron,
     name:" Macaron",
     desc:"Macaron Mix of Five",
     price:800
}]

  return (
    <>
    <div className='flex justify-center'>
    <Card product ={product}/>
    </div>
    </>
  )
}

export default App
