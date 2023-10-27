import { LinkStyle } from './styles'
export const Link = ({ link, description, color = 'primary' }) => {
  return (
    <LinkStyle to={link} color={color}>{description}</LinkStyle>
  )
}
