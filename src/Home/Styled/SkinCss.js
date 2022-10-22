import styled from "styled-components";


export const SkinCss = styled.div`
.corpo{background-color: rgba(16, 34, 38, 0.5); 
width: 1000px;
height: 870px;
margin-left: 130px;
border-radius: 15px;
color: white;
border: 2px solid rgba(10, 164, 136, 1);
border-style: dashed solid dashed solid;}
.title{
    text-align:center;
    background-image: linear-gradient(to bottom, rebeccapurple, steelblue, turquoise);
  color: black;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card{
  width: 70%;
  height: 150px;
  background-color:  rgba(16, 34, 38, 1);
  display: grid;
  grid-template-columns: 1fr 5fr;
  border-radius: 12px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  overflow:hidden;
 margin:10px;
 border: 2px solid rgba(10, 164, 136, 1);
}
.fotoCard{
  display:flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
}
.texto{
  width: 102%;
  height: 98%;
  margin-left: -117px;
  background-color:  rgba(16, 34, 38, 1);
  box-shadow: 14px 0px 4px rgba(0, 0, 0, 0.25);
  z-index: +1 !important;
  border: 2px solid rgba(10, 164, 136, 1);
  border-radius: 12px;
  h3{
    margin:8px;
  }
  p{
    padding:10px;
    font-size: 14px;
    
  }
}

img{
 position: absolute;
width: 90px;
margin-left: 590px;
margin-top:27px;
border-radius: 10px;
}
.bonus{
  background-color:#ffffffb4;
  padding: 6px;
  color: black;
  width: 300px;
  margin-left: 25px;
  border-left: 3px solid yellow;
  text-align:center;
}
@media only screen and (max-width: 600px){
    .corpo{
        margin-left: 10px;
        height: 880px;
    }
   .card{
    height: 150px;
    width: 95%;
 
   }
   .texto{
  margin-left: -77px;
  width: 98%;
  h3{
    margin:5px;
  }
  p{
    padding:10px;
    font-size: 12px;
    margin-top: -10px;
    
  }
  
}
img{
 position: absolute;
width: 90px;
margin-left: 353px;
margin-top:27px;
border-radius: 10px;
}
}
`
