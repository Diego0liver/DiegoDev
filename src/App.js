import React from 'react'
import Projetos from './Home/Projetos'
import Menu from './Home/Menu'
import {  Route, Routes  } from "react-router-dom";
import Skill from './Home/Skill';



const App = () => {
  return (<>
    <Routes>
      <Route path='/' element={<Menu/>} />
      <Route path='/skill' element={<Skill/>} />
      <Route path='/projetos' element={<Projetos/>} />
    </Routes>
    </>
  )
}

export default App