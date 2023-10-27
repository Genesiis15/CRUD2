import styled from 'styled-components'

export const Grid = styled.main`

margin-bottom:8%;
min-height:73vh;
display:flex;
  @media (min-width: 724px) {
    flex: 1 0 50%;


  }

  @media (min-width: 1024px) {
    flex: 1 0 33.33%;
    padding:0 10%;
  }

`;