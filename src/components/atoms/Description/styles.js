import styled from 'styled-components'
import { getColor } from '../../../theme'
export const Text = styled.p`
    font-size: 1rem;
    color: ${props => getColor(props.color)};
    font-weight:${props => props.bold && 'bold'};
    @media (min-width: 724px) {
        font-size: 25px;
  }
`