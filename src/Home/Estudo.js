import React from 'react'
import { EstudoCss } from './Styled/EstudoCss'
import Curso from '../img/curso.png'
import Facu from '../img/facu.png'
import Book from '../img/book.png'

const Estudo = () => {
  return (
    <EstudoCss>
    <div className='conteiner'>
      <h1 id='estudo' >Formação e Ensino</h1>
      <ul>
        <li><img src={Book} style={{width:20, marginRight:10}} ></img>
        Ensino Médio completo</li>
        <li><img src={Facu} style={{width:20, marginRight:10}} ></img>
          Cursando Análise e Desenvolvimento de Sistemas(Estácio)</li>
        <li><img src={Curso} style={{width:20, marginRight:10}} ></img>
        Concluí curso Programdor full-stack JS</li>
      </ul>
    </div>
    </EstudoCss>
  )
}

export default Estudo