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
import Blog from '../img/blog.png'
import Phpdoc from '../img/phpdoc.png'
import Type from '../img/type.png'
import Estoq from '../img/estoq.png'
import Beer from '../img/beer.png'
import Taghtml from '../img/html.png'
import Css from '../img/css.png'
import Js from '../img/js.png'
import Mailer from '../img/mai.png'
import MailerFoto from '../img/mailer.png'
import Php from '../img/php.png'
import Apilara from '../img/apilara.jpg'
import Laravel from '../img/laravel.jpg'



const Projetos = () => {
  return (
    <ProjetoCss>
    <div className='conteiner'>
     <h1 id='proj'>Projetos</h1>
   
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
        <a href='https://github.com/Diego0liver/FormularioFrontEndJs'><button>FrontEnd</button></a>
        <a href='https://github.com/Diego0liver/FormularioBacktEndJs'><button>BackEnd</button></a>
       </div>
      </div>

      <div className='card'>
       <h3>Blog FullStack</h3>
       <hr />
       <img alt='react' className='img' src={Blog} ></img>
       <div>
       <img alt='react' style={{width:30, margin:10}} src={ReactJs} ></img>
       <img alt='react' style={{width:40, margin:7}} src={NodeJs} ></img>
       <img alt='next' style={{width:40, margin:10}} src={Mysql} ></img>
       </div>
      Blog FullStack com reatcJS e nodeJS. <br />
      Multer para mandar imagem pro banco de dados.
       <div className='btns'>
        <a href='https://github.com/Diego0liver/BlogFrontEndJs'><button>FrontEnd</button></a>
        <a href='https://github.com/Diego0liver/BlogBackEndJs'><button>BackEnd</button></a>
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
        <a href='https://github.com/Diego0liver/loginFrontendJs'><button>FrontEnd</button></a>
        <a href='https://github.com/Diego0liver/loginBackendJs'><button>BackEnd</button></a>
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
        <a href='https://github.com/Diego0liver/dashboardNextjs'><button>FrontEnd</button></a>
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
      <a href='https://github.com/Diego0liver/e-commerce-react'><button>FrontEnd</button></a>
       </div>
      </div>

      <div className='card'>
       <h3>Crud Php</h3>
       <hr />
       <img alt='react' className='img' src={Phpdoc} ></img>
       <div>
       <img alt='react' style={{width:30, margin:10}} src={Php} ></img>
       <img alt='mysql' style={{width:40, margin:10}} src={Mysql} ></img>
       </div>
       Crud com Php e bootstrap, padrao Poo e Pdo, <br/>banco de dados MySQL.
       <div className='btns'>
       <a href='https://github.com/Diego0liver/CrudPhpPooPdo'><button>Codigo</button></a>
       </div>
      </div>

      <div className='card'>
       <h3>Controle de estoque</h3>
       <hr />
       <img alt='react' className='img' src={Estoq} ></img>
       <div>
       <img alt='react' style={{width:30, margin:10}} src={ReactJs} ></img>
       <img alt='ts' style={{width:30, margin:10}} src={Type} ></img>
       <img alt='node' style={{width:40, margin:7}} src={NodeJs} ></img>
       <img alt='mysql' style={{width:40, margin:10}} src={Mysql} ></img>
       </div>
       Controle de estoque FullStack em Js e Ts
       <div className='btns'>
       <a href='https://github.com/Diego0liver/ControleEstoqueFrontEndTs'><button>FrontEnd</button></a>
        <a href='https://github.com/Diego0liver/BackEndControleEstoqueTs'><button>BackEnd</button></a>
       </div>
      </div>

      <div className='card'>
       <h3>API Laravel</h3>
       <hr />
       <img alt='react' className='img' src={Apilara} ></img>
       <div>
       <img alt='react' style={{width:30, margin:10}} src={Laravel} ></img>
       <img alt='ts' style={{width:30, margin:10}} src={Mysql} ></img>
       </div>
      Api Laravel CRUD Relacionamento 1pN e Np1.
       <div className='btns'>
       <a href='https://github.com/Diego0liver/ApiLaravelRelacionamento1pN-Np1'><button>Codigo</button></a>
       </div>
      </div>


      <div className='card'>
       <h3>Landing Page com envio de E-mail</h3>
       <hr />
       <img alt='react' className='img' src={MailerFoto} ></img>
       <div>
       <img alt='react' style={{width:30, margin:10}} src={ReactJs} ></img>
       <img alt='ts' style={{width:30, margin:10}} src={NodeJs} ></img>
       <img alt='ts' style={{width:30, margin:10}} src={Mailer} ></img>
       </div>
       Landing Page com envio de email Nodejs usando Nodemailer
       <div className='btns'>
       <a href='https://github.com/Diego0liver/EnvioDeEmailFrontEndJs'><button>FrontEnd</button></a>
        <a href='https://github.com/Diego0liver/EnvioDeEmailBackEndJs'><button>BackEnd</button></a>
       </div>
      </div>



     </div>

     <a href='https://github.com/Diego0liver?tab=repositories'><button className='mais-proj'>Mais projetos!</button></a>
    </div>


    </ProjetoCss>

  )
}

export default Projetos