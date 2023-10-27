import styled from 'styled-components'
import { getColor } from '../../../theme'

export const TitleStyle = styled.h1`
    color: ${props => getColor(props.theme)};
    font-size:2rem;
    @media (min-width: 724px) {
        font-size:5rem;
  }
`