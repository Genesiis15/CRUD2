import { ButtonStyle } from './styles'



export const ButtonCard = ({ text, handleClick, color }) => {



    return <>
        <ButtonStyle theme={color} color={color} onClick={handleClick}>{text} </ButtonStyle>
    </>
}