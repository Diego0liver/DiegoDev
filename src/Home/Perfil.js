import React from 'react'
import { PerfilCss } from './Styled/PerfilCss'



const Perfil = () => {


  return (
    <PerfilCss>
      <div className='perfil'>
      <h1>Diego Oliveira</h1>
      <h3>Desenvolvedor JavaScript/Php</h3>
      <p>Programador autodidata, conclui curso ProgramadorBr fullstack em JavaScript,
        atualmente cursando <b>Análise e Desenvolvimento de Sistemas</b> na Estácio, trabalho como <b>freelancer
        na Runy.me</b>. Moro em Maringá Pr, tenho 28 anos de idade conhecimento e 
         experiência com as linguagem JavaScript, ReactJs, TypeScript, NodeJs, Php e Laravel.
         Framework de css Bootstrap, styled-components e Sass. Banco de dados MySQL e 
         também ferramentas como Git, GitHub, Jira e API.
         Tenho facilidade para aprender linguagens novas também disposição, sou apaixonado por códigos.
         Comunicativo, facilidade trabalha com equipe e criativo. </p>
         <a href='https://drive.google.com/file/d/1P-xyOq2LUhj5GeiYcVvK4Xq-kQa05K0f/view?usp=sharing'>
         <button>Currículo</button></a>
         <a href='https://github.com/Diego0liver'><button>GitHub</button></a>
      </div>   
    </PerfilCss>
  )
}

export default Perfil
