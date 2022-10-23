import styled from "styled-components";



export const ProjetoCss = styled.div`
.corpo{background-color: rgba(16, 34, 38, 0.5); 
width: 1000px;
height: 1100px;
margin-left: 130px;
border-radius: 15px;
color: white;
border: 2px solid rgba(10, 164, 136, 1);
border-style: dashed solid solid solid;
margin-bottom:10px;}
.title{
    text-align:center;
    background-image: linear-gradient(to bottom, rebeccapurple, steelblue, turquoise);
  color: black;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
img{
  width: 400px;
  border-top-left-radius:5px;
  border-top-right-radius:5px;

}
.card{
  background-color:rgba(10, 164, 136, 1);
  width: 400px;
  border-radius:5px;
  margin:15px;
}
.cont1{
  display:flex;
  flex-direction: row;
  justify-content: space-around;
}
h3, p{
  margin:9px;
}
.btns{
  display: flex;
  justify-content: center;
}
button{
  padding: 5px;
  margin: 5px;
  border: 2px solid #fff;
  color: white;
  background-color: rgba(10, 164, 136, 1);
  cursor: pointer;
}
.maisprojetos{
  margin-left: 460px;
  animation: anibut 1s linear infinite;
  margin-top:10px
}
@keyframes anibut {
    from {transform: translateY(-15px);}
    50% {transform: translateY(0);
      box-shadow: 0 0 1em rgba(255, 255, 255, 0.527);}
    to{transform: translateY(-15px);}
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
@media only screen and (max-width:  990px){
    .corpo{
      margin-left: 10px;
      height: 3300px;
    }
    .cont1{
      display: block;
    }
    .maisprojetos{
    align-items: center;
    margin-top:40px;
    font-size: 30px;
}
.card{
  margin-left: 110px;
  width: 80%;
  text-align: center;
  img{
    width:100%;
  }
  h3{
    font-size: 50px;
  }
  p{
    font-size: 30px;
  }
  button{
    font-size: 25px;
  }
}
    }
`
