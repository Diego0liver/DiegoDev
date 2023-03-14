import React from 'react'
import { EstudoCss } from './Styled/EstudoCss'
import Curso from '../img/curso.png'
import Facu from '../img/facu.png'
import Book from '../img/book.png'

const Estudo = () => {
  return (
    <EstudoCss>
    <div className='conteiner'>
        <h1 id='estudo' >Estudos</h1>
        <div className='cont-corpo'>
       
        <div className='card'>
          <div>
        <img alt='not' src={Book} ></img></div>
        <div>
            <h4>Ensino Médio completo</h4>
        </div>
        </div>


        <div className='card'>
          <div>
        <img alt='not' src={Curso} ></img></div>
        <div>
            <h4>Curso Full-stack JavaScript</h4>
            <p>Curso <b>concluído</b> <a href='https://drive.google.com/file/d/1cUqYxdSqwQ_5w9JnRP1iTRPDKRDnqIuw/view?usp=share_link'>ReactJs</a> & <a href='https://drive.google.com/file/d/1LPpseM5P8AWpChdbaP-QH4MFCHaON9hE/view?usp=share_link'>
              NodeJs</a><br/>
            Programador BR</p></div>
        </div>
        
        <div className='card'>
        <img alt='facu' src={Facu} ></img>
        <div>
            <h4>Análise e desenvolvimento de sistemas</h4>
            <p><b>Cursando</b> Análise e desenvolvimento de <br/>sistemas
            na faculdade Estácio</p></div>
        </div>
        </div>
    </div>
    </EstudoCss>
  )
}

export default Estudo