import styled from "styled-components";



export const PerfilCss = styled.div`
.corpo{background-color: #102226; 
width: 1000px;
height: 620px;
margin-left: 130px;
border-radius: 15px;
margin-top:30px;
color: white;
border: 2px solid rgba(10, 164, 136, 1);
border-style: solid solid dashed solid;}
.title{
    text-align:center;
    background-image: linear-gradient(to bottom, rebeccapurple, steelblue, turquoise);
  color: black;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
b{
    background-image: linear-gradient(to bottom, rebeccapurple, steelblue, turquoise);
  color: black;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size:25px
}
p{
    font-size:18px
}
.topo{
    background-color:white;
    background-color: rgba(16, 34, 38); 
    box-shadow: 0 0px 7px 1px rgba(0, 0, 0, 0.2);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px
    }
.perfil{
    display: flex;
    justify-content: space-around;
}
.box{
    position: relative;
    width: 100px;
    height: 100px;
    background-color: #102226;
    border-radius: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    overflow:hidden;
    margin-left:50px;
    margin-top:20px;
}
.box::after{
    content: '';
    position: absolute;
    width: 200px;
    height: 100px;
    background-image: conic-gradient(transparent, transparent, transparent, #00ccff);
    animation: animat 4s linear infinite;
    animation-delay: -10s;
    filter:blur(10px)
}
.box::before{
    content: '';
    position: absolute;
    width: 200px;
    height: 100px;
    background-image: conic-gradient(transparent, transparent, transparent, #a708d8);
    animation: animat 4s linear infinite;
    filter:blur(10px)
}
@keyframes animat {
    0%{transform:rotate(0deg)}

    100%{transform:rotate(360deg)}
}
.github{
    color: white;
    z-index: 1;
    background-color: #102226;
    width: 90px;
    border-radius: 100%;
    text-align:center;
    padding: 2px;
}
a{
    text-decoration:none;
    color: white;
}
.bola{
    background-color:rgba(10, 164, 136, 0.39);
    width: 200px;
    height: 200px;
    border-radius:100%;
    margin-left:700px;
    filter:blur(100px);
    margin-top: -160px;
}
i{
    border-bottom: 1px solid rgba(10, 164, 136, 1);
}
.whats{
 position: fixed;
 width:30px;
margin-left: 480px;
}
@media screen and (min-width: 400px){
    .corpo{
        margin-left: 10px;
        height: 650px;
        padding: 10px;
       
    }
    .perfil{
        display: block;
    img{
        display: none;
    }
    }
    p{
    font-size:30px
}
.whats{
 position: fixed;
 width:30px;

}
}

`

