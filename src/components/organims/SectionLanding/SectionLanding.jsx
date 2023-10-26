import { Section } from '../../molecules/Section/Section'
import { Description, Title } from '../../atoms'
import { title } from '../../../theme'
import { useTheme } from 'styled-components'
import { Image } from '../../atoms/Image/Image'
export const SectionLanding = () => {
    const theme = useTheme()
    return (
        <div style={{ display: 'flex', flex: 1, flexWrap: 'wrap', gap: '10px', justifyContent: 'space-around' }}>
            <Section >
                <Title title={title} color={theme.secondary} />
                <Description color={'silver'} text={"Hi I'm your trusted Frenchie"} />
            </Section>
            <Section>
                <Image img={'https://i.pinimg.com/originals/38/f9/c6/38f9c66071b76b0690bdcfa79f3e383b.png'} />
            </Section>
        </div>
    )
}
