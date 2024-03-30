import styled from "styled-components";



export const MenuCss = styled.div`
.conteiner{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

.card{
    background-color: #fff;
    width: 400px;
    height: 460px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    
}
.eu{
    width: 100px;
    border-radius: 50px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, #fff 0px 0px 0px 3px;
}
.imgTopo{
    background: linear-gradient(0deg, rgba(211,149,87,1) 0%, rgba(125,145,109,1) 64%);
    border-radius:10% 10% 99% 20% / 10% 10% 30% 53%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
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
    p{
        color: #5f5f5f;
        font-style: italic;
        font-size: 13px;
        margin: 0;
    }
    .fa-graduation-cap{
        color: #5f5f5f;
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
        background-color: #5e7354;
        border: none;
        cursor: pointer;
        padding: 10px;
        border-radius: 20px;
    }
    button:hover{
        box-shadow: rgb(208,149,87) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        transition: 0.5s ease, color 0.5s ease;
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

.fundoIcon{
    color:#5e7354;
    font-size: 45px;
    margin: 10px;
    padding:0px;
    border-radius: 5px;
}
.fundoIcon:hover{
    box-shadow: rgb(208,149,87) 0px 20px 30px -10px;
    transition: 0.5s ease, color 0.5s ease;
}

.dev-info{
    color: #5e73548c;
    font-size 30px
}
.dev-info:hover{
    box-shadow: rgb(208,149,87) 0px 20px 30px -10px;
    transition: 0.5s ease, color 0.5s ease;
}


@media only screen and (max-width: 1200px){
    .card{
        width: 700px;
        height: 900px;
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
    .fundoIcon{
        font-size: 73px;
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
    .dev-info{
        font-size: 70px;
        margin-top: 15px;
    }
}
`