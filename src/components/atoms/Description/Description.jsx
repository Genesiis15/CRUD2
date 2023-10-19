import { Text } from './styles'

export const Description = ({ text, color }) => {
    return <>
        <Text color={color}>{text}</Text>
    </>
}