import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './shared/header/header'
import Home from './pages/home/home'
import Contact from './pages/Contact/Contact'
import Test from './pages/test/test'
import Card_details1 from './pages/card_details/details1/card_details1'
import Sell_section from './pages/sell_section/sell_section'
import Cars_List from './pages/cars_List/Cars_List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <BrowserRouter>
      <Routes>
        <Route path='/header' element={<Header/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/test' element={<Test/>} />
        <Route path='/card_details1' element={<Card_details1/>} />
        <Route path='/sell_sec' element={<Sell_section/>} />
        <Route path='/Cars_List' element={<Cars_List/>} />
      </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
