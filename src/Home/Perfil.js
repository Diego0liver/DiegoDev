import React from 'react'
import { PerfilCss } from './Styled/PerfilCss'



const Perfil = () => {


  return (
    <PerfilCss>
      <div className='perfil'>
      <h1>Diego Oliveira Fonseca</h1>
      <h3>Programador web</h3>
      <p>Programador web autodidata, conclui curso ProgramadorBr fullstack em JavaScript,
        atualmente estudo urso Técnico em desenvolvimento web na Unopar,
         moro em Maringá Pr, tenho 27 anos de idade, estudo programação a 1 ano, conhecimento e 
         experiência em projetos próprios com as linguagem JavaScript, React Js, NextJs, NodeJs.
         Banco de dados MySQL e também ferramentas como o bootstrap, sass, Git|GitHub, API e Figma.
         Tenho facilidade para aprender linguagens novas também disposição, sou apaixonado por códigos.
         Comunicativo, facilidade trabalha com equipe e criativo. </p>
         <a href='https://drive.google.com/file/d/1qdUk8M8YaRyYFZQDTRjUAfxsKboD1_t3/view?usp=share_link'>
         <button>Currículo</button></a>
         <a href='https://github.com/Diego0liver'><button>GitHub</button></a>
      </div>   
    </PerfilCss>
  )
}

export default Perfil