import styled from "styled-components";



export const TecCss = styled.div`
.skil{
    max-width: 1200px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 150px !important;
    
    h1{
        border-left: 4px solid #5d6ba7;
        width: 500px;
        margin-left: auto;
        margin-right: auto;
    }
    p{
        width: 800px;
        margin-left: auto;
        margin-right: auto;
    }
}
    p{
        text-align: start;
        font-size: 20px;
    }
.card{
    height: 300px;
    max-width: 300px;
    background-color: #fafafa;
    padding: 10px;
    margin: 5px;
    margin-left: auto;
    margin-right: auto;
}
@keyframes animate {
    0% {
        transform: translateX(-100%)                        
    }
  }
.card-corpo{
    display:flex;
    margin-left: auto;
    margin-right: auto;
    flex-wrap:wrap ;
}

@media only screen and (max-width: 1200px){
    .skil{
        margin-top: 2400px !important;
    }
    .card{
    height: 560px;
    max-width: 500px;
    padding: 10px;
    margin: 5px;
    margin-left: auto;
    margin-right: auto;
    font-size: 30px;
    }

    h1{
    font-size: 50px
 }   
}


`