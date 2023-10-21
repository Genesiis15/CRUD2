import styled from 'styled-components'

export const Content = styled.div`
    flex:.8;
    display:flex;
    flex-direction:column;
    gap:20px;
    justify-content:space-between;
`

export const PriceContent = styled.div`
    display:flex;
    flex-direction:column;
`

export const Button = styled.button`
    width:100%;
    padding:20px;
    font-size:26px;
    font-weight:bold;
    color:${props => props.color};
    border:none;
    background:${props => props.theme};
    cursor:pointer;
    border-radius:50px;
`