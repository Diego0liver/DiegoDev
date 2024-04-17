import React from 'react'
import { SkillCss } from './Styled/SkillCss'
import { Link } from 'react-router-dom';

const Skill = () => {
    return (
    <SkillCss>
        <div className='imagem-de-fundo'></div>
        <div className='conteiner'>
            <Link to="/" > 
                <i class="fa-solid fa-square-caret-left btn-voltar"></i>
            </Link>
            <div className='card-corpo'>
                <div className='card'>
                    <div className='img-tec'>
                        <i class="fa-brands fa-html5 tec-icon"></i>
                        <i class="fa-brands fa-css3-alt tec-icon"></i>
                        <h5>HTML/CSS</h5>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>framework Bootstrap</li>
                            <li>framework Sass</li>
                        </ul>
                    </div>
                </div>

                <div className='card'>
                    <div className='img-tec'>
                        <i class="fa-brands fa-php tec-icon"></i>
                        <i class="fa-brands fa-laravel tec-icon"></i>
                        <h5>PHP/Laravel</h5>
                        <ul>
                            <li>PHP</li>
                            <li>framework Laravel, Bibliteca Livewire & Laravel para API</li>
                        </ul>
                    </div>
                </div>
        
                <div className='card'>
                    <div className='img-tec'>
                        <i class="fa-brands fa-js tec-icon"></i>
                        <h5>JavasScript</h5>
                        <ul>
                            <li>JavasScript</li>
                            <li>framework JQuery</li>
                        </ul>
                    </div>
        </div>

        <div className='card'>
            <div className='img-tec'>
                <i class="fa-brands fa-react tec-icon"></i>
                <i class="fa-brands fa-vuejs tec-icon"></i>
                <h5>React.JS/Vue.Js</h5>
                <ul>
                    <li>framework React.JS, conhecimento em principais hooks</li>
                    <li>framework Vue.Js, biblioteca Vuex</li>
                </ul>
            </div>
        </div>

        <div className='card'>
            <div className='img-tec'>
                <i class="fa-solid fa-database tec-icon"></i>
                <i class="fa-solid fa-network-wired tec-icon"></i>
                <h5>MySQL/UML</h5>
                <ul>
                    <li>MySQL, comandos basicos SQL</li>
                    <li>UML, conhecimento em leitura de modelagem de banco de dados</li>
                </ul>
            </div>
        </div>

        <div className='card'>
            <div className='img-tec'>
                <i class="fa-brands fa-git-alt tec-icon"></i>
                <i class="fa-brands fa-github tec-icon"></i>
                <h5>GIT/GitHub</h5>
                <ul>
                    <li>Conhecimento em comandos de git para interagir com o github através 
                    de branch, Pull Request entre outros.</li>
                </ul>
            </div>
        </div>

        <div className='card'>
            <div className='img-tec'>
                <i class="fa-brands fa-trello tec-icon"></i>
            <i class="fa-brands fa-jira tec-icon"></i>
                <h5>Trello/Jira</h5>
                <ul>
                    <li>Conhecimento em ferramenta de gestão ágil de projetos Jira e Trello.</li>
                </ul>
            </div>
        </div>
            </div>
        </div>
    </SkillCss>
   )
}

export default Skill