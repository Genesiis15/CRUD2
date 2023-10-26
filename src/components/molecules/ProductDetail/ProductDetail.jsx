import { Section } from '../../molecules'
import { Description, Title } from '../../atoms'
import { Content } from './styles'
import { ButtonCard } from '../../atoms'
import { useTheme } from 'styled-components';
import { ProductsContext } from '../../../context/productsContext'
import { useContext } from 'react'
import { Image } from '../../atoms/Image/Image'
export const ProductDetail = ({ data }) => {
    const theme = useTheme()
    const { products, setProducts } = useContext(ProductsContext)
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'space-around', marginBottom: '35%' }}>
            <Section>
                <Image img={data.image} />
            </Section>
            <Content>
                <Title title={data.title} color={theme.primary} />
                <Description text={data.description} color={'secondary'} />
                <ButtonCard theme={theme.info} color={theme.info} text={`$${data.price}`} handleClick={() => {
                    alert(`Se agrego al carrito el: ${data.title}`)
                    setProducts([...products, data])
                }} />
            </Content>
        </div>
    )
}
