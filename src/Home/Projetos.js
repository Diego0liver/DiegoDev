import React from 'react'
import { ProjetoCss } from './Styled/ProjetosCss'
import ReactJs from '../img/react.png'
import NodeJs from '../img/nodejs.png'
import Forms from '../img/oc.png'
import Loog from '../img/ocs.png'
import Mysql from '../img/mysql.png'
import Next from '../img/nextjs.png'
import Dashs from '../img/dashs.png'
import Shart from '../img/chart.jpeg'
import Ecom from '../img/ecm.png'
import Styl from '../img/styled.png'


const Projetos = () => {
  return (
    <ProjetoCss>
    <div className='conteiner'>
     <h1>Projetos Proprios</h1>
     (Ao clicar na imagem abrira um link para o video do projeto)
     <div className='corpo'>
      <div className='card'>
       <h3>Formulario FullStack</h3>
       <hr />
       <img alt='react' className='img' src={Forms} ></img>
       <div>
       <img alt='react' style={{width:30, margin:10}} src={ReactJs} ></img>
       <img alt='react' style={{width:40, margin:7}} src={NodeJs} ></img>
       <img alt='next' style={{width:40, margin:10}} src={Mysql} ></img>
       </div>
       Formualrio FullStack com reatcJS e nodeJS. <br />
       PDFMake para gerar um PDF do Formulario.
       <div className='btns'>
        <button>FrontEnd</button>
        <button>BackEnd</button>
       </div>
      </div>

      <div className='card'>
       <h3>Sistema de login FullStack</h3>
       <hr />
       <img alt='react' className='img' src={Loog} ></img>
       <div>
       <img alt='react' style={{width:30, margin:10}} src={ReactJs} ></img>
       <img alt='react' style={{width:40, margin:7}} src={NodeJs} ></img>
       <img alt='next' style={{width:40, margin:10}} src={Mysql} ></img>
       </div>
       Sistema de login FullStack com reatcJS e nodeJS. <br />
       Com rotas protegida e token JWT.
       <div className='btns'>
        <button>FrontEnd</button>
        <button>BackEnd</button>
       </div>
      </div>

      <div className='card'>
       <h3>DashBoard frontend</h3>
       <hr />
       <img alt='react' className='img' src={Dashs} ></img>
       <div>
       <img alt='react' style={{width:30, margin:10}} src={Next} ></img>
       <img alt='react' style={{width:60}} src={Shart} ></img>
       </div>
       Sistema Dashboard frontend NextJs. <br />
       Com chartJs e json-server.
       <div className='btns'>
        <button>FrontEnd</button>
       </div>
      </div>

      <div className='card'>
       <h3>E-commerce frontend</h3>
       <hr />
       <img alt='react' className='img' src={Ecom} ></img>
       <div>
       <img alt='react' style={{width:30, margin:10}} src={ReactJs} ></img>
       <img alt='react' style={{width:30, margin:7}} src={Styl} ></img>
       </div>
       Sistema E-commerce frontend ReactJs. <br />
       Com react-use-cart e json-server.
       <div className='btns'>
        <button>FrontEnd</button>
       </div>
      </div>
     </div>
     <a href='https://github.com/Diego0liver?tab=repositories'><button>Mais projetos!</button></a>
    </div>
    </ProjetoCss>
  )
}

export default Projetos