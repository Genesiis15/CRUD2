import {SectionStyle} from './styles'


export const Section =({children, solid}) =>{
    return <SectionStyle solid={solid}>
    {children}
    </SectionStyle>
}