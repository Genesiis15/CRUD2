import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {colors} from '../../../theme'

const getColor = (color) => {
    return color == 'primary' && colors.primary || color == 'secondary' && colors.secondary || color == 'danger' && colors.danger || color == 'info' && colors.info  
}

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