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



@media only screen and (max-width: 1200px){
    .card{
        width: 700px;
        height: 780px;
    }

    .eu{
        width: 250px;
        border-radius: 120px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, #fff 0px 0px 0px 3px;
    }
    .imgTopo{
        padding: 20px
    }
    .nome{
        font-size: 55px;
    }
    .facu{
        img{
           width: 50px;
           height: 50px;
        }
        p{
           font-size: 33px;
        }
    }
    .redSocial{
        img{
            padding: 7px;
            cursor: pointer;
            width: 55px;
           height: 55px;
        }
    }
    
    .contatos{
        button{
            margin: 20px;
            padding: 20px;
            border-radius: 33px;
            font-size: 33px;
        }
    }
    .opc{
        img{
            width: 55px;
            height: 55px;
            margin-top: 20px
        }
    }
    .hr{
      border: none;
      width: 90%;
      height: 1px; 
      background-color: #ccc; 
    }
}
`