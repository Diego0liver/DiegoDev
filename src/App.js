import React from 'react'
import Tec from './Home/Tec'
import Projetos from './Home/Projetos'
import Menu from './Home/Menu'
import {  Route, Routes  } from "react-router-dom";



const App = () => {
  return (<>
    <Routes>
      <Route path='/' element={<Menu/>} />
      <Route path='/skill' element={<Tec/>} />
      <Route path='/projetos' element={<Projetos/>} />
    </Routes>
    </>
  )
}

export default App