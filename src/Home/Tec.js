import React from 'react'
import { TecCss } from './Styled/TecCss'
import Taghtml from '../img/html.png'
import Css from '../img/css.png'
import Js from '../img/js.png'
import Next from '../img/nextjs.png'
import ReactJs from '../img/react.png'
import NodeJs from '../img/nodejs.png'
import Mysql from '../img/mysql.png'
import Git from '../img/git.png'
import Github from '../img/github.png'
import Boots from '../img/boots.png'
import Styl from '../img/styled.png'
import Sass from '../img/sass.png'


const Tec = () => {
  return (
    <TecCss>
    <div className='skil'>
    <h1 id='skil'>Linguagens</h1>
    <p>Experencia em projetos proprios com as tecnologias:</p>
    <div className='card-corpo'>
    <div className='card'>
        <div>
        <img alt='hmlt' style={{width:30}} src={Taghtml} ></img>
        <img alt='css' style={{width:30}} src={Css} ></img>
        </div>
         Conhecimento em <b>HTML</b> linguagem de marcação de hipertexto web, com tegs de botao, listas,
         tabelas, nav, checkbox, body, link, div, imagem e entre outras. E tambem folhas de estilo em 
         cascatas <b>CSS</b> com propriedades hover, animação, alinhamentos, display flex, grid, transition,
         media query, entre outros.
    </div>
    
    <div className='card'>
        <div>
        <img alt='js' style={{width:30}} src={Js} ></img>
        </div>
        Conhecimento em <b>JavaScript</b> com criacao de variaveis, funcoes, arrays, manipulacao de arrays, com filter,
        reduce, map, forEtch, some, slice, toString, length, find... Conhecimento em callback, manipulacao de API,
        localStorege, Json, props, Datas, async/await, promise, loop, if/else, try/catch e tratamento de erros.
    </div>

    <div className='card'>
    <div>
        <img alt='react' style={{width:30, margin:10}} src={ReactJs} ></img>
        <img alt='next' style={{width:25, margin:10}} src={Next} ></img>
        </div>
        Conhecimento em <b>ReactJS</b> manipulacao em hooks como useState, useEffect e useContenxt. Conhecimento com 
        bibliotecas do react como o react-router, steled-components, bootstrap, react-hook-forms, react-use-cart,
        chartJs, PDFmake, axios, react-toastify e framework <b>NextJs</b> no front-end.
    </div><br />

    <div className='card'>
    <div>
        <img alt='react' style={{width:40, margin:7}} src={NodeJs} ></img>
        <img alt='next' style={{width:40, margin:10}} src={Mysql} ></img>
        </div>
        <b>NodeJS</b> basico para criacao de API's, criacao de endpoints CREATE, READ, UPDATE e DELETE. Conhecimento
        com bibliotecas Express, sequelize, multer, JWT, nodemailer, cors, dotenv e nodemon. <b>MySQL</b> como banco de dados para criacao
        de tabelas no workbench e comandos SQL.
    </div>

    <div className='card'>
    <div>
        <img alt='react' style={{width:30, margin:7}} src={Git} ></img>
        <img alt='next' style={{width:30, margin:7}} src={Github} ></img>
        </div>
        Conhecimento em <b>git</b> para interagir com a ferramenta <b>github</b> através de comandos como,
        git commit, init, git clone, branch, git add, push, origin e status. 
        Conhecimento em <b>github</b> para deploy, github pages e domínios personalizados. 
    </div>

    <div className='card'>
    <div>
        <img alt='react' style={{width:30, margin:7}} src={Styl} ></img>
        <img alt='next' style={{width:40, margin:2}} src={Boots} ></img>
        <img alt='next' style={{width:40, margin:2}} src={Sass} ></img>
        </div>
        Conhecimento em <b>Bootstrap</b>, React-Bootstrap, <b>styled-components</b> e <b>Sass</b> para 
        estilização de páginas de 
         aplicações web através do html e do ReactJs.
    </div>

    </div>
    </div>
    </TecCss>
  )
}

export default Tec