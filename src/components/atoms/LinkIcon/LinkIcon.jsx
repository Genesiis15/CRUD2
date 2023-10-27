import { LinkStyle } from './styles'
export const LinkIcon = ({ link, description, color = 'primary', children }) => {
  return (
    <LinkStyle to={link} color={color}>{children}<p>{description}</p></LinkStyle>
  )
}
