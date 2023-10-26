import styled from 'styled-components'
import { getColor } from '../../../theme'

export const TitleStyle = styled.h1`
    font-size:5rem;
    color: ${props => getColor(props.theme)}
`