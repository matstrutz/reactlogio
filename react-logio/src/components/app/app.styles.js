import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    /* background-image: linear-gradient(to bottom, rgb(0,200,255), rgb(255,255,255)); */
    background-image: linear-gradient(to bottom, rgb(${props => props.sec}, ${props => props.sec * 2}, ${props => props.sec * 3}), rgb(255,255,255));
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