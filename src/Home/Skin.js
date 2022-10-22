import React from 'react'
import { SkinCss } from './Styled/SkinCss'
import Html from '../img/htmlcss.png'
import Js from '../img/js.png'
import Sty from '../img/style.png'
import Git from '../img/git.png'


const Skin = () => {
  const Tecnologias = '< /tecnologias >'
  return (<SkinCss><div className='corpo'>
    <h1 className='title'>{Tecnologias}</h1>

    <div className='grid'>
       <div className='card'>
       <div className='fotoCard'>
       </div><img alt='git' src={Html}></img>
       <div className='texto'>
        <h3>Html/CSS</h3>
        <p>Conhecimento em linguagem de Marcação de Hipertexto, inputs, formulários, lista, tabelas entre outras
          . Conhecimento em css para estilização do html e manter ele responsivo para os demais aparelhos, 
          ajudando a melhorar interação com o usuário, através de slides, animações, cards
           e entre outros elemento de uma pagina Web.</p>
       </div>
       </div>

       <div className='card'>
       <div className='fotoCard'>
       </div><img alt='git' src={Js}></img>
       <div className='texto'>
       <h3>Javascrip/ReactJs</h3>
       <p>
       Conhecimento em JS com variavel, funções, map, números e operadores, if e else, lop, array, await,
        filter, manipulação de inputs e botão, e entre outro. O react tenho experiência em meus 
        projetos com hook, react router, uuid, props, axios para manipulação de Json com métodos
         http e styled-components.
       </p>
       </div>
       </div>

       <div className='card'>
       <div className='fotoCard'>
       </div><img alt='git' src={Sty}></img>
       <div className='texto'>
       <h3>Bootstrap/Styled-components</h3>
       <p>
       Conhecimento em Bootstrap, React-Bootstrap e styled-components 
       para estilização de paginas e aplicações web através do html e do ReactJs.
       </p>
       </div>
       </div>

       <div className='card'>
       <div className='fotoCard'>
       </div><img alt='git' src={Git}></img>
       <div className='texto'>
       <h3>Git/GitHub</h3>
       <p>
       Conhecimento em git para interagir com a ferramenta github através de comandos como,
        git commit, init, git clone, branch, git add, push, origin, status e entre comandos. 
        Conhecimento em github para deploy, github pages e domínios personalizados. 
       </p>
       </div>
       </div>

    </div>
    <div className='bonus'>
      <p>💡 Conhecimento com ferramenta figma, <br />
      &nbsp; &nbsp;
       NodeJs basico e estudando TypeScript.</p>
    </div></div>
    </SkinCss>
  )
}

export default Skin