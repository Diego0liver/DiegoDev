import styled from "styled-components";



export const ContatoCss = styled.div`
.corpo{background-color: #102226; 
width: 1000px;
height: 320px;
margin-left: 130px;
border-radius: 15px;
color: white;
border: 2px solid rgba(10, 164, 136, 1);
border-style: dashed solid solid solid;
@media only screen and (max-width:  990px){
    margin-left: 10px;
    margin-bottom: 15px;
}
}
.title{
    text-align:center;
    background-image: linear-gradient(to bottom, rebeccapurple, steelblue, turquoise);
  color: black;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.topo{
    background-color: rgba(16, 34, 38); 
    box-shadow: 0 0px 7px 1px rgba(0, 0, 0, 0.2);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    width: 300px;
    margin-left: 350px;
    }
.conteinerContato{
   background-color: #0b171b;
   width: 280px;
   padding: 10px;
   margin-left: 350px;
   display: flex;
   justify-content: space-between;
   img{
    margin: 5px;
    cursor: pointer;
   }
}
p{
    text-align: center;
    @media only screen and (max-width:  990px){
font-size: 25px;
    }
}

`