import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    /* background-image: linear-gradient(to bottom, rgb(251,100,1), rgb(251,150,5), rgb(224,226,122), rgb(255,255,255)); */
    background-image: linear-gradient(to bottom, rgb(5, ${props => props.hrs * 10}, 250), rgb(255,255,255));
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Container = styled.div`
    width: 25%;
    height: 15%;

    background-color: transparent;

    box-shadow: 0 5px 10px rgba(0,0,0, .15);

    border-radius: 20px;
    border-style: solid;
    border-width: thin;
    border-color: black;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerBackground = styled.div`
    
`

export const DataComponent = styled.h2`
`