import React from 'react'
import { SkillCss } from './Styled/SkillCss'
import Taghtml from '../img/html.png'
import Css from '../img/css.png'
import Js from '../img/js.png'
import Next from '../img/nextjs.png'
import ReactJs from '../img/react.png'
import NodeJs from '../img/nodejs.png'
import Mysql from '../img/mysql.png'
import Git from '../img/git.png'
import Github from '../img/github.png'
import Php from '../img/php.png'
import Laravel from '../img/laravel.jpg'
import Type from '../img/type.png'
import Jira from '../img/jira.png'
import { Link } from 'react-router-dom';
import vue from '../img/vue.png'

const Skill = () => {
    return (
    <SkillCss>
        <div className='imagem-de-fundo'></div>
        <div className='conteiner'>
            <Link to="/" > 
                <i class="fa-solid fa-square-caret-left"></i>
            </Link>
            <h1>Conhecimentos</h1>
            <div className='card-corpo'>
                <div className='card'>
                    <div className='img-tec'>
                        <i class="fa-brands fa-html5"></i>
                        <i class="fa-brands fa-css3-alt"></i>
                    </div>
                    <p>
                    Conhecimento em <b>HTML</b> linguagem de marcação de hipertexto web, com tegs de botao, listas,
                    tabelas, nav, checkbox, body, link, div, imagem e entre outras. E tambem folhas de estilo em 
                    cascatas <b>CSS</b> com propriedades hover, animação, alinhamentos, display flex, grid, transition,
                    media query, entre outros.<br/>
                    </p>
                    <a href='https://drive.google.com/file/d/1NuVdXPHVZ5Nn1Js7ZOtmqbl1l6ov7jcH/view?usp=share_link' >
                        Certificado</a>
                </div>

                <div className='card'>
            <div className='img-tec'>
                <i class="fa-brands fa-js"></i>
            </div>
            <p>
            Conhecimento em <b>JavaScript</b> com criacao de variaveis, funcoes, arrays, manipulacao de arrays, com filter,
            reduce, map, forEtch, some, slice, toString, length, find... Conhecimento em callback, manipulacao de API,
            localStorege, Json, props, Datas, async/await, promise, loop, if/else, try/catch e tratamento 
            de erros. <br/><b>Typescript</b> para tipagem e basico <b>JQuey</b>. <br /></p>
            <a href='https://drive.google.com/file/d/1NuVdXPHVZ5Nn1Js7ZOtmqbl1l6ov7jcH/view?usp=share_link' >
                Certificado</a>
        </div>

        <div className='card'>
        <div className='img-tec'>
            <i class="fa-brands fa-react"></i>
            <i class="fa-brands fa-vuejs"></i>
            </div>
            <p>
            Conhecimento em <b>ReactJS</b> manipulacao em hooks como useState, useEffect e useContenxt. Conhecimento com 
            bibliotecas do react como o react-router, <i>Redux</i>, steled-components, bootstrap, react-hook-forms, react-use-cart,
            chartJs, PDFmake, axios, react-toastify. Conhecimento em <b>VueJS</b> e <i>VueEx</i></p>
            <a href='https://drive.google.com/file/d/1cUqYxdSqwQ_5w9JnRP1iTRPDKRDnqIuw/view?usp=share_link' >
                Certificado</a>
        </div><br />

        <div className='card'>
            <div className='img-tec'>
                <i class="fa-solid fa-database"></i>
            </div>
            <p>
            basico em <b>MySQL</b> para consultas em query.<br/></p>
        </div>

        <div className='card'>
            <div className='img-tec'>
                <i class="fa-brands fa-php"></i>
                <i class="fa-brands fa-laravel"></i>
            </div>
            <p>
            Conhecimento em <b>Php</b>, criacao de MVC com
            padrao de projeto Poo e PDO. <b>Laravel</b> para criacao de API crud,
            relacionamento de tabelas de banco de dados, login, token Sanctum, Migration, Model, Controller e rotas.<br/>
            Basico em <b>LiveWire</b>.
            </p>
        </div>

        <div className='card'>
            <div className='img-tec'>
                <i class="fa-brands fa-git-alt"></i>
                <i class="fa-brands fa-github"></i>
                <i class="fa-brands fa-jira"></i>
                <i class="fa-brands fa-trello"></i>
            </div>
            <p>
            Conhecimento em <b>git</b> para interagir com a ferramenta <b>github</b> através de comandos como,
            git commit, init, git clone, branch, git add, push, origin e deploy.<br/>
            Conhecimento em ferramenta de gestão ágil de projetos <b>Jira</b> e <b>Trello</b>.
            </p>
        </div>
            </div>
        </div>
    </SkillCss>
   )
}

export default Skill