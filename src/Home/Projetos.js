import React from 'react'
import { ProjetoCss } from './Styled/ProjetoCss'
import Pedia from '../img/pedia.png'
import Finan from '../img/ecomme.png'
import API from '../img/proApi.png'
import Crud from '../img/crud.png'



const Projetos = () => {

  const Projetos = '< /projetos >'
   
  return (<ProjetoCss><div className='corpo'>
     <div className='bola'></div>
     <h1 className='title'>{Projetos}</h1>

   <div className='cont1'>
   <div className='card'>
        <img alt='beer' src={Pedia}></img>
        <h3>Biblioteca de cerveja</h3>
        <p>Mini blog de cervejas usando HTML, css, Js<br />
        Com dominio personalizado tag de google analict<br />
        Usei Js para filtra pesquisa de cerveja e para cookies</p>
        <div className='btns'>
        <a href='https://github.com/Diego0liver/BeerPedia'>
         <button>Codigo</button> </a>
        <a href='http://bibliotecabeer.com.br/'>
        <button>Link</button> </a>
          </div>  
    </div>
    <div className='card'>
        <img alt='react' src={Finan}></img>
        <h3>Sistema delivery</h3>
        <p>Sistema delivery feito em ReactJs, Json-server para simular uma API
 Para manipular as rotas usei o React Router .
Utilizei axios para manipular a API. E também o styled-components. O carrinho de compras do sistema foi feito em react-use-cart</p>
        <div className='btns'>
        <a href='https://github.com/Diego0liver/controleFinacaReact'>
        <button>Codigo</button></a>
        <a href='https://teste1000-ruddy.vercel.app/'>
        <button>Link</button></a></div>
    </div>
   </div>
   <div className='cont1'>
   <div className='card'>
        <img alt='react' src={API}></img>
        <h3>API em nodeJs</h3>
        <p>API Json com metodos Create(criar), Read(ler), Update(atualizar) e Delete(apagar)
         feita em Node.JS, Express e MariaDB para armazenar dados. Filtragem por categorias no Banco de dados</p>
          <div className='btns'>
        <a href='https://github.com/Diego0liver/api-nodeJs-crud'>
        <button>Codigo</button></a>
        <a href='https://www.linkedin.com/feed/update/urn:li:activity:6992519189362012160/'>
        <button>Link</button></a></div>
    </div>

    <div className='card'>
        <img alt='react' src={Crud}></img>
        <h3>Lista de contatos(Crud)</h3>
        <p>Crud feito em react js, usando Jason-serve para simular uma API
         O crud e feito com styled-components para estilizar o pagina
         Usando axios para manipular API 
         Usei uuid para gerar um novo ID 
        Usando react router para manipular rotas..</p>
        <div className='btns'>
        <a href='https://github.com/Diego0liver/Crud-Json-serve'>
        <button>Codigo</button></a>
        <a href='https://www.linkedin.com/posts/diego-oliveira-fonseca_reactjs-frontend-js-activity-6986047350876061696-sJwC?utm_source=share&utm_medium=member_desktop'>
        <button>Link</button></a></div>
    </div>
   </div>
  
   <a href='https://github.com/Diego0liver?tab=repositories'>
   <button className='maisprojetos'>+ Projetos</button></a></div>
    </ProjetoCss>
  )
}

export default Projetos