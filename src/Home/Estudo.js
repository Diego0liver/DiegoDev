import React from 'react'
import { EstudoCss } from './Styled/EstudoCss'
import Curso from '../img/curso.png'
import Facu from '../img/facu.png'
import Book from '../img/book.png'
import Work from '../img/work.png'

const Estudo = () => {
  return (
    <EstudoCss>
    <div className='conteiner'>
      <h1 id='estudo' >Formação e Experiência</h1>
      <ul>
        <h3 style={{color:'white'}}>Formação</h3>
        <li><img src={Book} style={{width:20, marginRight:10}} ></img>
        Ensino Médio completo</li>
        <li><img src={Facu} style={{width:20, marginRight:10}} ></img>
          Cursando Análise e Desenvolvimento de Sistemas(Estácio)</li>
        <li><img src={Curso} style={{width:20, marginRight:10}} ></img>
        Concluí curso Programdor full-stack JS</li>
        <h3 style={{color:'white'}}>Experiência</h3>
        <li><img src={Work} style={{width:20, marginRight:10}} ></img>
        Trabalho na Runy.me com Php/Laravel.</li>
      </ul>
    </div>
    </EstudoCss>
  )
}

export default Estudo