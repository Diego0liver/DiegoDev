import styled from "styled-components";

export const SkillCss = styled.div`
.conteiner{
    text-align: center;
}
.card-corpo{
    max-width: 1000px;
    display:flex;
    margin-left: auto;
    margin-right: auto;
    flex-wrap:wrap;
}
.card{
    height: 345px;
    max-width: 300px;
    background-color: #fafafa;
    margin: 10px !important;
    margin-left: auto;
    margin-right: auto;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    p{
        padding-left: 10px;
        padding-right: 10px;
    }
    a{
        text-decoration: none;
        padding-left: 10px;
        padding-right: 10px;
    }
}
.img-tec{
    background-color: #5d6ba7;
    border-radius:10% 10% 99% 20% / 10% 10% 30% 53%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 30px;
        padding: 5px;
    }
}
@media only screen and (max-width: 1200px){
   
    .card{
    height: 560px;
    max-width: 500px;
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