import { Section } from '../../molecules/Section/Section'
import { Description, Title } from '../../atoms'
import { title } from '../../../theme'
import { useTheme } from 'styled-components'
export const SectionLanding = () => {
    const theme = useTheme()
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px', padding: '40px', justifyContent: 'space-around' }}>
            <Section >
                <Title title={title} color={theme.secondary} />
                <Description color={'silver'} text={"Hi I'm your trusted Frenchie"} />
            </Section>
            <Section>
                <img width={400} src={'https://i.pinimg.com/originals/38/f9/c6/38f9c66071b76b0690bdcfa79f3e383b.png'} />
            </Section>
        </div>
    )
}
