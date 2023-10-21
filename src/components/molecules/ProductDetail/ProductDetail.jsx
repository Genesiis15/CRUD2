import { Section } from '../../molecules'
import { Description, Title } from '../../atoms'
import { Content, PriceContent, Button } from './styles'
import { useTheme } from 'styled-components';
export const ProductDetail = ({ data }) => {
    const theme = useTheme()
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px', padding: '40px', justifyContent: 'space-around' }}>
            <Section>
                <img src={data.image} />
            </Section>
            <Content>
                <Title title={data.title} color={theme.primary} />
                <Description text={data.description} color={'secondary'} />
                <Button theme={theme.info} color={theme.white}>{`$${data.price}`} </Button>
            </Content>
        </div>
    )
}
