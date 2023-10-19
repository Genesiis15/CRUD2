import styled from 'styled-components'

export const SearchStyle = styled.input`
    width:100%;
    background:${props => props.theme}1a;
  border:none;
   
    outline:none;
`
export const ContainerStyle = styled.div`
width: 60%;
 background: white;
  display: flex;
  align-items:center;
  gap:10px;  border:1px solid ${props => props.theme};
  padding:10px;
  border-radius:20px;
  
  background:${props => props.theme}5a;
`