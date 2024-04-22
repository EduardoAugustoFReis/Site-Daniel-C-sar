import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 110px auto 50px;
  grid-template-areas: 
  "header"
  "content"
  "footer";
`;

export const Header = styled.div`
  grid-area: header;
  width: 100%;
  padding: 1.2rem;
  text-align: center;

  background-color: #B70003;

  color: #fff;
  
  >h1{
    font-size: 3.6rem;
  }
  >h2{
    font-size: 2.4rem;
  }

  @media (max-width: 700px){

    >h1{
      font-size: 2.0rem;
    }

    >h2{
      font-size: 1.6rem;

    }
  }
`;

export const Main = styled.div`
  grid-area: content;
  width: 100%;
  
  padding-top: 2.0rem;
  
  background-color: #FCFCFC;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    height: 25.0rem;
  }

  >h2{
    font-size: 2.4rem;
    padding: 5px 0px 5px 0px;
  }

  >p{
    font-size: 2.0rem;
    text-align: center;
  }

  >ul{
    list-style: none;
    border-radius: 10px;
    border: 2px solid #F51C18;
    width: 40.0rem;
    padding: 1.2rem;
    
    >li{
      font-size: 1.8rem;
    }
  }

  @media (max-width: 700px){
    
    
    img{
      height: 20.0rem;
      margin-top: 5px;
    } 
    
    >h2{
      font-size: 2.0rem;
      padding: 5px 0px;
    }

    >p{ 
      font-size: 1.6rem;
    }

    >ul{
      width: 30.0rem;
    }

  }
`;

export const Footer = styled.div`
  grid-area: footer;
  width: 100%;
  text-align: center;
  padding: 1.0rem;

  background-color: #B70003;

  >span{
    font-size: 1.8rem;
    color: #fff;
  }

  @media (max-width: 700px){

    >span{
      font-size: 1.4rem;
    }
  }
`;
