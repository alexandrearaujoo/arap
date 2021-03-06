import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: var(--background-menus);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 90%;
  height: 500px;
  border: none;
  border-radius: 15px;
  margin: 0 auto;
  max-width: 500px;

  h1 {
    font-size: var(--fontsize-h1);
    margin-bottom: 10px;
  }

  span {
    font-size: var(--headline);
    margin-bottom: 10px;
  }
`;

export const Blocker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80vw;
  min-height: 50vh;
  position: fixed;
  z-index: 1;
  background-color: transparent;
  left: 10%;
  top: 35vh;
`;

// export const StyledMain = styled.main`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `
