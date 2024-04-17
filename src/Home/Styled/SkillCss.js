import styled from "styled-components";

export const SkillCss = styled.div`
.conteiner{
   
}
b{
    margin-left: 210px;
    font-size: 20px;
    font-style: italic;
    color: #a7b2a1
}
.card-corpo{
    max-width: 1000px;
    display:flex;
    margin-left: auto;
    margin-right: auto;
    flex-wrap:wrap;
    text-align:center;
}
.ponto{
    color: #a7b2a1;
}
.card{
    width: 120px;
    height: 50px;
    margin: 10px !important;
    margin-left: auto;
    margin-right: auto;
    border: none;
   
    p{
      color: #a7b2a1;
    }
    a{
        text-decoration: none;
        padding-left: 10px;
        padding-right: 10px;
    }
    li{
        font-size: 14px
    }
    h5{
        padding-left: 10px;
        padding-right: 10px;
    }
}
.img-tec{
    .tec-icon{
        font-size: 40px;
        padding: 5px;
        color:
        RGB(109 127 101);
    }
}
.btn-voltar{
    font-size: 40px;
    padding: 5px;
    color:#a7b2a1;
}
@media only screen and (max-width: 1200px){
    .card{
    height: 200px;
    max-width: 200px;
    padding: 10px;
    margin: 5px;
    margin-left: auto;
    margin-right: auto;
    font-size: 30px;
    }

    h1{
    font-size: 50px
 }   
}
.card-corpo{
    display:flex;
    justify-content: center;
    flex-wrap:wrap ;
}
`