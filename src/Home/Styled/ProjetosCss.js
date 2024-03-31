import styled from "styled-components";



export const ProjetoCss = styled.div`
.conteiner{
    background-color:rgba(255, 255, 255, 0.5); ;
    border: 1px solid #ae7b48;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    button{
        background-color: #5e7354;
        color: white;
        font-weight: bold;
        border: none;
        padding: 10px;
        cursor: pointer;
        border-radius: 5px;
        margin: 10px;
        transition: all .8s;
        :hover{
            background-color: #9f9365;
            box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        }
    }
    b{
        color: #758a6a;
        margin-left: 20px
    }
}
p{
    text-align: start;
    font-size: 20px;
}
.corpo{
    display:flex;
    text-align: center;
    justify-content:center;
    flex-direction: row;
    flex-wrap:wrap ;
}
.card-corpo{
    background-color: white;
    border-left: 4px solid #5d6ba7;
    padding: 5px;
    margin: 5px;
    border-radius: 3px;
    button{
        background-color: #5e7354;
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
        border-radius: 5px;
        margin: 10px;
    }
}
.card{
    background-color:rgb(250,250,250, 0.7);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 5px;
    max-width: 400px;
    text-align: center;
    padding: 5px;
    margin-bottom: 10px;
    margin: 10px;
    h3{
        margin-bottom: 0px;
    }
}
.img{
    width:250px;
    margin-left: 10px;
    border-radius: 5px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
hr{
        width: 50px;
        height: 3px;
        background-color:#5e7354;
        border: none
    }
 .btns{
    button{
        background-color: #5e7354;
        color: white;
        font-weight: bold;
        border: none;
        padding: 10px;
        cursor: pointer;
        border-radius: 5px;
        margin: 10px;
    }
 } 
 .btn-voltar{
    font-size: 40px;
    padding: 5px;
    color:#758a6a;
}

 @media only screen and (max-width: 1200px){
  
    .btns{
 button{
        font-size: 30px;
    }}
 .mais-proj{
    font-size: 30px;
 }   
 h1{
    font-size: 50px
 }
}
`