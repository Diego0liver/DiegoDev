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
`