import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {getColor} from '../../../theme'

export const LinkStyle = styled(Link)`
    color:${props =>  getColor(props.color) };
    font-weight:bold;
    font-size:18px;
    text-decoration:none;
    padding:10px;
    border-radius:5px;
    &:hover{
        background:${({color}) => getColor(color)}1a;
    }
`