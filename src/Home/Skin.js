import React from 'react'
import { SkinCss } from './Styled/SkinCss'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Html from '../img/htmlcss.png'
import Js from '../img/js.png'
import Sty from '../img/style.png'
import Git from '../img/git.png'
import Node from '../img/node.png'
import Logic from '../img/logic.png'


const Skin = () => {
  const Tecnologias = '< /tecnologias >'
  let config = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear"
  }
  return (<SkinCss><div className='corpo'>
    <h1 className='title'>{Tecnologias}</h1>
     <Slider  {...config}>
<div className='card-corpo'>
  <div className='card'>
    <div className='card-img'>
      <img alt='dev' src={Html}></img>
      <div className='desc'>
      <h2>Html/css</h2>
      <p>Conhecimento em linguagem de Marcação de Hipertexto, inputs, formulários, lista, tabelas entre outras
          . Conhecimento em css para estilização do html e manter ele responsivo para os demais aparelhos, 
          ajudando a melhorar interação com o usuário, através de slides, animações, cards
           e entre outros.</p>
     </div>
    </div>
  </div>
</div>
<div className='card-corpo'>
  <div className='card'>
    <div className='card-img'>
      <img alt='dev' src={Js}></img>
      <div className='desc'>
      <h2>Javascrip/ReactJs</h2>
      <p>
       Conhecimento em JS com variável, funções, map, números e operadores, if e else, lop, array, await,
        filter, manipulação de inputs e botão, e entre outro. O react tenho experiência em com hook
        (useState, useEffect, useContext), react router, uuid, props, axios para manipulação de Json com métodos
         http.
       </p>
     </div>
    </div>
  </div>
</div>
<div className='card-corpo'>
  <div className='card'>
    <div className='card-img'>
      <img alt='dev' src={Sty}></img>
      <div className='desc'>
      <h2>Bootstrap/Styled-components</h2>
      <p>
       Conhecimento em Bootstrap, React-Bootstrap e styled-components 
       para estilização de páginas  e aplicações web através do html e do ReactJs.
       </p>
     </div>
    </div>
  </div>
</div>
<div className='card-corpo'>
  <div className='card'>
    <div className='card-img'>
      <img alt='dev' src={Git}></img>
      <div className='desc'>
      <h2>Git/GitHub</h2>
      <p>
       Conhecimento em git para interagir com a ferramenta github através de comandos como,
        git commit, init, git clone, branch, git add, push, origin, status e entre comandos. 
        Conhecimento em github para deploy, github pages e domínios personalizados. 
       </p>
     </div>
    </div>
  </div>
</div>
<div className='card-corpo'>
  <div className='card'>
    <div className='card-img'>
      <img alt='dev' src={Node}></img>
      <div className='desc'>
      <h2>NodeJs/MariaDb</h2>
      <p>
      Básico  em nodeJs express para criação de endpoint API e mariaBd para
       armazenamentos de dados, comandos mysql.
       </p>
     </div>
    </div>
  </div>
</div>
<div className='card-corpo'>
  <div className='card'>
    <div className='card-img'>
      <img alt='dev' src={Logic}></img>
      <div className='desc'>
      <h2>Logica de Programação</h2>
      <p>
     Conhecimento em Logica de Programação, POO(Programação Orientada a Objetos), SOLID & design patterns.
       </p>
     </div>
    </div>
  </div>
</div>
     </Slider>
  
    </div>
    </SkinCss>
  )
}

export default Skin