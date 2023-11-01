import React from 'react'
import { Link } from 'react-router-dom';
import { MenuCss } from './Styled/MenuCss'
import Linkdin from '../img/linkdin.png'
import Github from '../img/github.png'
import Eu from '../img/eu.jpg'
import Facu from '../img/facu.png'
import Curriculo from '../img/curriculo.png'
import Code from '../img/code.png'
import Skill from '../img/ling.png'
import You from '../img/youtube.png'

const Menu = () => {

  const linkWhatsApp = 'https://wa.me/5544991763101'
  const enderecoEmail = 'diegoju95@hotmail.com'
  const abrirLink = () => {
    window.open(linkWhatsApp, '_blank');
  };
  return (
    <MenuCss>
       <div class="imagem-de-fundo"></div>
       <div className='conteiner'>
         <div className='card'>
           <div className='imgTopo'>
            <img alt='diego' src={Eu} className='eu' />
           </div>
           
            <p className='nome'>Diego Oliveira</p>
            <div className='facu'>
              <img alt='facu' src={Facu} />
              <p>Análise desenvolvimento de sistema<br/></p>
            </div>

           <div className='redSocial'>
           <a href='https://github.com/Diego0liver' target="_blank" rel="noopener noreferrer">
           <img alt='gitHub' src={Github} width='35' height='35' title='GitHub'/>
           </a>
           <a href='https://www.linkedin.com/in/diego-oliveira-fonseca/' target="_blank" rel="noopener noreferrer">
           <img alt='link' src={Linkdin} width='35' height='35' title='Linkedin'/>
           </a>
           <a href='https://www.youtube.com/channel/UCRuXFNX9XQcSsWDyIubzbGg' target="_blank" rel="noopener noreferrer">
           <img alt='zap' src={You} width='33' height='33' title='YouTube'/>
           </a>
           </div>
           
           <div className='contatos'>
           <button onClick={abrirLink}>WhatsApp</button>
           <a href={`mailto:${enderecoEmail}`}>
           <button>E-mail</button>
           </a>
           </div>
           
           <hr className='hr'/>

           <div className='opc'>
            <a href='https://drive.google.com/file/d/1TVx5G-W2jE-8Gv0nSGwfauPskvvdKGa8/view?usp=sharing' target="_blank" rel="noopener noreferrer">
           <img alt='curriculo' title="Currículo" src={Curriculo} width='25' height='25' />
           </a>
            <p>•</p>
            <Link to="/skill">
           <img alt='skill' src={Skill} title="Linguagem de programação" width='24' height='24'/>
            </Link>
            <p>•</p>
            <Link to='/projetos'>
           <img alt='code' src={Code} width='25' height='25' title='Projetos' />
            </Link>
           </div>
         </div>  
       </div>
    </MenuCss>
  )
}

export default Menu
