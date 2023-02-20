import React from 'react'
import { PerfilCss } from './Styled/PerfilCss'



const Perfil = () => {


  return (
    <PerfilCss>
      <div className='perfil'>
      <h1>Diego Oliveira Fonseca</h1>
      <h3>Desenvolvedor JavaScript</h3>
      <p>Programador autodidata, conclui curso ProgramadorBr fullstack em JavaScript,
        atualmente estudo análise e Desenvolvimento de Sistemas na Estácio,
         moro em Maringá Pr, tenho 28 anos de idade, estudo programação pouco mais de 1 ano, conhecimento e 
         experiência em projetos próprios com as linguagem JavaScript, ReactJs, React-Native, TypeScript, NextJs, NodeJs.
         Banco de dados MySQL e também ferramentas como o bootstrap, sass, Git|GitHub, API e Figma.
         Tenho facilidade para aprender linguagens novas também disposição, sou apaixonado por códigos.
         Comunicativo, facilidade trabalha com equipe e criativo. </p>
         <a href='https://drive.google.com/file/d/1sl0Qt53D9JmwUq1VZfS1XxmCkt5hyvx0/view?usp=share_link'>
         <button>Currículo</button></a>
         <a href='https://github.com/Diego0liver'><button>GitHub</button></a>
      </div>   
    </PerfilCss>
  )
}

export default Perfil
