import { TitleStyle } from './styles'
import { useTheme } from 'styled-components';
export const Title = ({ title }) => {
    const theme = useTheme();
    return (
        <TitleStyle theme={theme.secondary}>{title}</TitleStyle>
    )
}
