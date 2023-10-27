import styled from 'styled-components'

export const NavbarStyle = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap:wrap;
    ${'' /* padding:10px; */}
    position:fixed;
    width:100%;
    background:#f7f7f7;
    top:0;
    z-index:100;
`

export const Margin = styled.div`
    margin-bottom:25%;

  @media (min-width: 724px) {
    flex: 1 0 33.33%;
    padding:0 10%;
    margin-bottom:8%;

  }
`

export const Modal = styled.div`
    width: 100%;
    height: 100vh;
    background:#e9e9e9;
    display:flex;
    justify-content:center;

`

export const ModalUl = styled.ul`
padding-top:40%;
display: flex;
    flex-direction: column;
  
    text-align: center;
    font-size: 50px;
  
    list-style:none;
`