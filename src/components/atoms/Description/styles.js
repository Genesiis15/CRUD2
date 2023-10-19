import styled from 'styled-components'
import { getColor } from '../../../theme'
export const Text = styled.p`
    font-size: 25px;
    color: ${props => getColor(props.color)}
`