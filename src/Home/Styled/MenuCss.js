import styled from "styled-components";



export const MenuCss = styled.div`
.conteiner{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
.card{
    background-color:  #fff;
    width: 300px;
    height: 360px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.eu{
    width: 100px;
    border-radius: 50px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, #fff 0px 0px 0px 3px;
}
.imgTopo{
    background-color: #5d6ba7;
    border-radius:10% 10% 99% 20% / 10% 10% 30% 53%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px
}
.nome{
    text-align:center;
    font-weight: bold;
    font-size: 23px;
    color: #4f4f4f;
    margin: 0;
}
.facu{
    display: flex;
    justify-content: center;
    align-items: center;
    img{
       padding: 10px;
       width: 20px;
       height: 20px;
    }
    p{
       color:  #4f4f4f;
       font-style: italic;
       font-size: 13px;
       margin: 0;
    }
}
.redSocial{
    display: flex;
    justify-content: center;
    img{
        padding: 7px;
        cursor: pointer;
    }
}

.contatos{
    display: flex;
    justify-content: center;
    button{
        margin: 10px;
        color: #fff;
        background-color: #5d6ba7;
        border: none;
        cursor: pointer;
        padding: 10px;
        border-radius: 20px;
    }
}

.opc{
    display: flex;
    justify-content: space-evenly;
    p{
        color: #ccc;
        margin-top: -1px   
    }
    img{
        cursor: pointer;
    }
}
.hr{
  border: none;
  width: 90%;
  height: 1px; 
  background-color: #ccc; 
}  
`