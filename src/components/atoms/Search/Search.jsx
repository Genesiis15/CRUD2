import { SearchStyle } from './styles'
import { ContainerStyle } from './styles'
import { useState } from 'react'
import { useTheme } from 'styled-components';
export const Search = ({ placeholder, onChange, children }) => {
    const [state, setState] = useState();
    const theme = useTheme();
    const handleClick = () => {
        onChange(state)
    }
    return <ContainerStyle theme={theme.whiteSilver}>

        <SearchStyle theme={theme.whiteSilver} onChange={(e) => setState(e.target.value)} placeholder={placeholder} />
        <span onClick={handleClick}>{children}</span>



    </ContainerStyle>

}