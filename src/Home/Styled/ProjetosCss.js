import styled from "styled-components";



export const ProjetoCss = styled.div`
.conteiner{
    background-color: #fafafa;
    border: 1px solid #e4e4e4;
    max-width: 1200px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 100px;
    button{
        background-color: #5d6ba7;
        color: white;
        font-weight: bold;
        border: none;
        padding: 10px;
        cursor: pointer;
        border-radius: 5px;
        margin: 10px;
    }
    h1{
        border-left: 4px solid #5d6ba7;
        width: 500px;
        margin-left: auto;
        margin-right: auto;
    }
}
.corpo{
    display:flex;
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
        background-color: #5d6ba7;
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
        border-radius: 5px;
        margin: 10px;
    }
}
.card{
    background-color: #fafafa;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 5px;
    max-width: 400px;
    padding: 5px;
    margin-bottom: 10px;
    margin: 10px;
    h3{
        margin-bottom: 0px;
    }
}
.img{
    width:300px;
    border-radius: 5px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
hr{
        width: 50px;
        height: 3px;
        background-color:#5d6ba7;
        border: none
    }
 .btns{
    button{
        background-color: #5d6ba7;
        color: white;
        font-weight: bold;
        border: none;
        padding: 10px;
        cursor: pointer;
        border-radius: 5px;
        margin: 10px;
    }
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