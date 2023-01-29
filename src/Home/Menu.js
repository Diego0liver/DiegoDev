import React, {useState} from 'react'
import { MenuCss } from './Styled/MenuCss'
import Linkdin from '../img/linkdin.png'
import Whats from '../img/whats.png'
import Github from '../img/github.png'
import Eu from '../img/eu.jpg'
import Menus from '../img/menu.png'

const Menu = () => {

  const [mob, setMob] = useState('conteiner')

  const dropDow = () =>{
    mob === "conteiner" ? setMob("conteiner" && "containerOf")
    : setMob("conteiner")
}

  return (
    <MenuCss>
    <nav className={mob}>
        <div>
        <button onClick={dropDow}>
          <img alt='menu' style={{width:25}} src={Menus}></img>
        </button>
        </div>
        <div className='eu'>
        <img alt='eu' style={{width:100}} src={Eu} ></img>
        <ul>
          <a href='https://drive.google.com/file/d/1qdUk8M8YaRyYFZQDTRjUAfxsKboD1_t3/view?usp=share_link'><li>Pefil</li></a>
          <a href='#skil'><li>Linguagens</li></a>
          <a href='#proj'><li>Projetos</li></a>
        </ul>
        </div>
        <div className='btn-menu'>
        <a href='https://github.com/Diego0liver'><img alt='next' style={{width:30, margin:5}} src={Github} ></img></a>
        <a href='https://www.linkedin.com/in/diego-oliveira-fonseca/'><img alt='react' style={{width:30, margin:5}} src={Linkdin} ></img></a>
        <a href='https://api.whatsapp.com/send?phone=5544997087807'><img alt='next' style={{width:30, margin:5}} src={Whats} ></img></a>
        </div>
    </nav>    
    </MenuCss>
  )
}

export default Menu