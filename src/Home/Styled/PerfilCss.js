import styled from "styled-components";



export const PerfilCss = styled.div`
.perfil{
    background-color: #fafafa;
    border: 1px solid #e4e4e4;
    max-width: 1200px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
<<<<<<< HEAD
=======
 
>>>>>>> b5e603c0b660aa9f7c0c58ddbe30937691c5c7bb
    @keyframes animate {
        0% {
            transform: translateX(-100%)                        
        }
      }
    h1{
        width: 500px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 60px;
        animation: animate 2s;
<<<<<<< HEAD
    }
    h3{
        animation: animate 2s;
=======
>>>>>>> b5e603c0b660aa9f7c0c58ddbe30937691c5c7bb
    }
    h3{
    animation: animate 2s;}
    p{
        width: 800px;
        margin-left: auto;
        margin-right: auto;
        animation: animate 2s;
    }
    button{
        background-color: #5d6ba7;
        color: white;
        font-weight: bold;
        border: none;
        padding: 10px;
        cursor: pointer;
        border-radius: 5px;
        margin: 10px;
        animation: animate 2s;
    }
}
@media only screen and (max-width: 1200px){
    .perfil{
    h1{
        margin-top: 100px;
        font-size: 60px;
    }
    button{
        font-size: 30px;
    }
}
}
`

