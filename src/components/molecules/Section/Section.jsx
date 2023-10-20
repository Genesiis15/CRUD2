import { SectionStyle } from './styles'


export const Section = ({ children, solid, row }) => {
    return <SectionStyle solid={solid} row={row}>
        {children}
    </SectionStyle>
}