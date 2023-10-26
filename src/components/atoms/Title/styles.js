import styled from 'styled-components'


export const TitleStyle = styled.h1`
    font-size:2rem;
    color: ${props => props.theme};
    @media (min-width: 724px) {
        font-size:5rem;
  }
`