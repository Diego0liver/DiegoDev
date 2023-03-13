import React from 'react'
import { EstudoCss } from './Styled/EstudoCss'
import Curso from '../img/curso.png'
import Facu from '../img/facu.png'

const Estudo = () => {
  return (
    <EstudoCss>
    <div className='conteiner'>
        <h1 id='estudo' >Estudos</h1>
        <div className='cont-corpo'>
       
        <div className='card'>
        <img alt='not' src={Curso} ></img>
            <h4>Curso Full-stack JavaScript</h4>
            <p>Curso <b>concluído</b> ReactJs & NodeJS<br/>
            Programador BR</p>
        </div>
        <div className='card'>
        <img alt='facu' src={Facu} ></img>
            <h4>Análise e desenvolvimento de sistemas</h4>
            <p><b>Cursando</b> Análise e desenvolvimento de <br/>sistemas
            na faculdade Estácio</p>
        </div>
        </div>
    </div>
    </EstudoCss>
  )
}

export default Estudo