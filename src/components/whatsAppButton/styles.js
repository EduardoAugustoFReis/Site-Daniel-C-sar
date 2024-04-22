import styled from "styled-components";

export const Container = styled.button`
  height: 58px;

  border: none;
  border-radius: 1.0rem;
  margin-top: 1.0rem;
  margin-bottom: 1.0rem;

  background-color: #0fbd69;

  padding: 12px;
  
  >a{
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 2.2rem;
    color: #fff;

    svg{
    font-size: 2.0rem;  
    }
  }  

  @media (max-width: 700px){
    
    >a{
      font-size: 1.6rem;
    }
  }
`;