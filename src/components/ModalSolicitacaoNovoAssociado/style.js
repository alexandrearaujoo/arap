import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary);
  height: 100%;
`;

export const Form = styled.form`
  width: 90%;
  height: 370px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: var(--background-menus);
  border-radius: 15px;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  h2 {
    text-align: center;
    color: var(--black);
  }

  span {
    font-size: var(--headline);
    text-align: center;
  }

  @keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(100px);
      transform: translateY(100px);
    }
  }

  button:first-child {
    align-self: flex-end;
    margin-right: 10px;
    width: 50px;
    height: 20px;
    svg {
      color: var(--black);
    }
  }

  button:first-child:hover{
    background-color:transparent;
    svg{
      color: var(--color-primary);
      font-size: 30px;
    }
  }
  button:first-child:active{
    background-color:transparent;
    svg{
      background-color: var(--color-secondary);
      font-size: 20px;
      border-radius: 50%; 
    }
  }
`;

export const Div = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  select {
    background-color: var(--color-secondary);
    color: var(--white);
    height: 30px;
    border-radius: 5px;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary);
  height: inherit;
  width: 100%;
  max-width: 800px;
`;
