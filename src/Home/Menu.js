import React from 'react'
import { Link } from 'react-router-dom';
import { MenuCss } from './Styled/MenuCss'
import Eu from '../img/eu2024.png'
import '@fortawesome/fontawesome-free/css/all.css';
import { SkillCss } from './Styled/SkillCss';

const Menu = () => {

  const linkWhatsApp = 'https://wa.me/5544991763101'
  const enderecoEmail = 'diegojof95@hotmail.com'
  const abrirLink = () => {
    window.open(linkWhatsApp, '_blank');
  };
  return (
    <MenuCss>
        <div className="imagem-de-fundo"></div>
        <div className='conteiners'>
          <div className='card'>
            <div className='imgTopo'>
              <img alt='diego' src={Eu} className='eu' />
            </div>
              <p className='nome'>Diego Oliveira</p>
              <div className='conteinerFacu'>
                <div className='facu'>
                  <p>Análise desenvolvimento de sistema</p>
                </div>
                <div className='facu'>
                  <p><i class="fa-solid fa-graduation-cap"></i>UNESA</p>
                </div>
              </div>
              <hr className='hr'/>
            <div className='redSocial'>
              <a href='https://github.com/Diego0liver' target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-square-github fundoIcon"></i>
              </a>
              <a href='https://www.linkedin.com/in/diego-oliveira-fonseca/' target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-linkedin fundoIcon"></i>
              </a>
              <a href='https://www.youtube.com/channel/UCRuXFNX9XQcSsWDyIubzbGg' target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-square-youtube fundoIcon"></i>
              </a>
            </div>
            <div className='contatos'>
            <button onClick={abrirLink}><i class="fa-brands fa-whatsapp"></i>&nbsp;WhatsApp</button>
              <a href={`mailto:${enderecoEmail}`}>
            <button><i class="fa-regular fa-envelope"></i>&nbsp;E-mail</button>
            </a>
            </div>
            
            <hr className='hr'/>
            <div className='opc'>
              <a href='https://drive.google.com/file/d/1O0JqT0CBZqDIkOOdUx3lgFjSem4L8gJ3/view?usp=sharing' target="_blank" rel="noopener noreferrer">
                <i class="fa-regular fa-file dev-info"></i>
              </a>
                <p>•</p>
                <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <i class="fa-regular fa-file-code dev-info"></i>
                </a>
                <p>•</p>
                <a href='https://github.com/Diego0liver?tab=repositories' target='_blank'>
                  <i class="fa-solid fa-laptop-code dev-info"></i>
                </a>
              </div>
            </div>  
        </div>

        {/* Modal */}
        <SkillCss>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5 text-secondary" id="exampleModalLabel">Skill's</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="list-group">
                      <div class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">HTML/CSS</h5>
                          <small><i class="fa-brands fa-html5 fa-2x text-secondary"></i>&nbsp;<i class="fa-brands fa-css3-alt fa-2x text-secondary"></i></small>
                        </div>
                      </div>
                      <div class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">Php/Laravel</h5>
                          <small class="text-muted"><i class="fa-brands fa-php fa-2x text-secondary"></i>&nbsp;<i class="fa-brands fa-laravel fa-2x text-secondary"></i></small>
                        </div>
                      </div>
                      <div class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">JavaScript/JQuery</h5>
                          <small class="text-muted"><i class="fa-brands fa-square-js fa-2x text-secondary"></i></small>
                        </div>
                      </div>
                      <div class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">ReactJs/VueJs</h5>
                          <small class="text-muted"><i class="fa-brands fa-react fa-2x text-secondary"></i>&nbsp;<i class="fa-brands fa-vuejs fa-2x text-secondary"></i></small>
                        </div>
                      </div>
                      <div class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">Git/GitHub</h5>
                          <small class="text-muted"><i class="fa-brands fa-git fa-2x text-secondary"></i>&nbsp;<i class="fa-brands fa-github fa-2x text-secondary"></i></small>
                        </div>
                      </div>
                      <div class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">Banco de dados MySQL</h5>
                          <small class="text-muted"><i class="fa-solid fa-database fa-2x text-secondary"></i></small>
                        </div>
                      </div>
                      <div class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">Trello/Jira</h5>
                          <small class="text-muted"><i class="fa-brands fa-trello fa-2x text-secondary"></i>&nbsp;<i class="fa-brands fa-jira fa-2x text-secondary"></i></small>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </SkillCss>
    </MenuCss>
  )
}

export default Menu
