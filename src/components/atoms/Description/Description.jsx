import { Text } from './styles'

export const Description = ({ text, color, bold }) => {
    return <>
        <Text color={color} bold={bold}>{text}</Text>
    </>
}