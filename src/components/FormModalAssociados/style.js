import styled from 'styled-components'

export const Form = styled.form`
    width: 80%;
    height: 450px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: var(--color-secondary);
    border-radius: 15px;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    h2 {
        text-align: center;
        color: var(--white)
    }
`

export const DivInfos = styled.form`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DivLocal = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    
`