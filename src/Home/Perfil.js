import React from 'react'
import { PerfilCss } from './Styled/PerfilCss'
import Amarelo from '../img/amarelo.png'
import Vermelho from '../img/vermelho.png'
import Verde from '../img/verde.png'
import Diego from '../img/eu.png'
import Whapp from '../img/whatsapp.png'


const Perfil = () => {
  const nome = '< /dev >'
  return (
    <PerfilCss>
      <div className='corpo'>
      <div className='topo'>
      <img alt='red' style={{width:'10px', margin:'3px'}} src={Vermelho} ></img>
    <img alt='amrelo' style={{width:'10px', margin:'3px'}} src={Amarelo} ></img>
    <img alt='green' style={{width:'10px', margin:'3px'}} src={Verde} ></img>
      </div>
      <h1 className='title'>{nome}</h1>
      <div className='perfil'>
        <div>
        <h1>Olá, 👋</h1>
       <h3>Sou Diego Oliveira, <b>Programador front-and</b></h3>
       <p>Tenho 27 anos, mais de um ano estudo programação em javascript<br/>
       Comecei com um curso full-stack Js do Programador BR e decidi focar em front-end<br/>
       Desde então me apaixonei em escrever códigos e aprender cada vez mais<br />
       Trabalho com <i>react Js</i>, tenho experiência com <i>projetos </i>próprios, estou<br />
       a procura de uma oportunidade de primeiro emprego na area.<br />
       Sonho em um dia se tornar um grande desenvolvedor.</p>
        </div>
      <img alt='dev' style={{width:'200px',
         height:'200px',
         borderRadius:'100%',
         border:'3px dashed rgba(10, 164, 136, 1)'}} 
         src={Diego}></img>
      </div>
      <div className='box'>
       <h3 className='github'><a href='https://github.com/Diego0liver'>
        <img alt='github' style={{width:'80px', borderRadius:'700px'}}
         src="https://img.icons8.com/nolan/64/github.png"></img></a></h3>
      </div>
      <a className='whats' href='https://api.whatsapp.com/send?phone=5544997087807' >
           <img className='whats' alt='whats' src={Whapp}></img></a>
       <div className='bola'></div>
       </div>
    </PerfilCss>
  )
}

export default Perfil