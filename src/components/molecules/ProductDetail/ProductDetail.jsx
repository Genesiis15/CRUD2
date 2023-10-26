import { Section } from '../../molecules'
import { Description, Title } from '../../atoms'
import { Content } from './styles'
import { ButtonCard } from '../../atoms'
import { useTheme } from 'styled-components';
import { ProductsContext } from '../../../context/productsContext'
import { useContext } from 'react'
import Swal from 'sweetalert2'

export const ProductDetail = ({ data }) => {
    const theme = useTheme()
    const { products, setProducts } = useContext(ProductsContext)
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px', padding: '40px', justifyContent: 'space-around' }}>
            <Section>
                <img src={data.image} />
            </Section>
            <Content>
                <Title title={data.title} color={'secondary'} />
                <Description text={data.description} color={'secondary'} />
                <ButtonCard theme={theme.info} color={theme.info} text={`$${data.price}`} handleClick={() => {
                    Swal.fire({
                        title: 'Agregado!',
                        text: data.title,
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setProducts([...products, data])
                }} />
            </Content>
        </div>
    )
}
