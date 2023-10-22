import styled from 'styled-components'

export const ButtonStyle = styled.button`
width:100%;
    padding:15px 10px;
    font-size:16px;
    font-weight:bold;
    color:white;
    border:none;
    background:${props => props.theme};
    cursor:pointer;
    border-radius:50px;
`