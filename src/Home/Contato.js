import React from 'react'
import { ContatoCss } from './Styled/ContatoCss'
import Link from '../img/lin.png'
import Whats from '../img/whats.png'
import Face from '../img/face.png'
import Vermelho from '../img/vermelho.png'
import Verde from '../img/verde.png'
import Amarelo from '../img/amarelo.png'




const Contato = () => {
    const Contatos = '< /Contatos>'
  return (<> <ContatoCss>
  <div className='corpo'>
  <h1 className='title'>{Contatos}</h1>
    <div className='topo'>
  <img alt='red' style={{width:'10px', margin:'3px'}} src={Vermelho} ></img>
  <img alt='amrelo' style={{width:'10px', margin:'3px'}} src={Amarelo} ></img>
  <img alt='green' style={{width:'10px', margin:'3px'}} src={Verde} ></img>
    </div>
   <div className='conteinerContato'>
   <a href='https://www.linkedin.com/in/diego-oliveira-fonseca/'>
  <img alt='link' src={Link} ></img></a>
  <a href='https://api.whatsapp.com/send?phone=5544997087807'>
  <img alt='zap' src={Whats} ></img></a>
  <a href='https://www.facebook.com/diego.junio.370'>
  <img alt='face' src={Face} ></img></a>
  </div>
  <p>📧 diegoju95@hotmail.com</p>
    </div>
  </ContatoCss> 
  </>
  )
}

export default Contato