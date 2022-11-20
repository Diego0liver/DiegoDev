import styled from "styled-components";


export const SkinCss = styled.div`
.corpo{background-color: rgba(16, 34, 38, 0.5); 
width: 1000px;
height: 600px;
margin-left: 130px;
border-radius: 15px;
color: white;
border: 2px solid rgba(10, 164, 136, 1);
border-style: dashed solid dashed solid;
@media only screen and (max-width:  990px){
  margin-left: 10px;
  height: 800px;
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
.card-corpo{
  position: relative;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}
.card-corpo:active, :hover, :focus{
  outline: none;
  border: none;
}
.card{
  width: 100%;
  height: 350px;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  .card-img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    transition: .5s;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    img:hover{
      opacity: .4;
      filter: grayscale(1);
      transition: .5s;
    }
  }
  .card-img:hover{
      transform:translateY(-280px);
      transition:all .9s;
    }
    
}

    @media only screen and (max-width:  990px){
      .card{
        height: 550px;
        .card-img:hover{
      transform:translateY(-580px);
      transition:all .9s;
    }
      }
     .desc{
      font-size: 30px;
     }
 
    }
`
