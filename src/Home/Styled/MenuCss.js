import styled from "styled-components";



export const MenuCss = styled.div`
.conteiner{
background-color:  #5d6ba7;
margin: 0px;
position: fixed;
width: 100%;
button{
    padding: 5px;
    margin: 10px;
}
.eu{
    display: none;
}
animation: drop 1s ease-out ;
}

@keyframes drop {
  100% {
    transform: translateY(0%);
  }
  0% {
    transform: translateY(-50%);
  }
  
}

  


.containerOf{
height: 220px;
background-color:  #5d6ba7;
margin: 0px;
position: fixed;
width: 100%;
.eu{
   display:flex;
   justify-content: center !important;
}
.btn-menu{
    display:flex;
   justify-content: center !important;
   margin-top: 10px;
}
button{
    padding: 5px;
    margin: 10px;
}
img{
        border-radius: 100px;
       
    }
ul{
    list-style: none;
    color: white;
    font-weight: bold;
}
.img-foto{
    width: 100px;
}
animation: dropdown 1s ease-in ;
}
@keyframes dropdown {
  0% {
    transform: translateY(-80%);
  }
  100% {
    transform: translateY(0);
  }
  
}




.btn-menu{
     display: flex;
     justify-content: flex-end;
     margin-top: -40px;
     margin-right: 100px;
}
button{
    border: none;
    background-color: #5d6ba7;
    cursor: pointer;
}
a{
    text-decoration: none;
    color: white;
}
.btn-contato{
    width:30px; 
    margin:5px
}
.btn-men{
        width:25px
    }

    
@media only screen and (max-width: 1200px){
    .btn-men{
        width:60px
    }
    .btn-contato{
    width:60px; 
   margin-top: -25px;
}
.containerOf{
    height: 400px;
    .img-foto{
    width: 200px;
    margin-bottom: 20px;
}
}
.eu{
    li{
        font-size: 35px;
    }
}
}
`