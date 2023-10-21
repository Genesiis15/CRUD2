import { TitleStyle } from './styles'
export const Title = ({ title, color }) => {

    return (
        <TitleStyle theme={color}>{title}</TitleStyle>
    )
}
