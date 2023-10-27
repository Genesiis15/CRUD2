import { Description } from '../../atoms'
import { ButtonCard } from '../../atoms/ButtonCard/ButtonCard'
import { ImageCircle } from '../../atoms/ImageCircle/ImageCircle'
import { ContentCard } from './styles'
import { useTheme } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { ProductsContext } from '../../../context/productsContext'
import { useContext } from 'react'
import Swal from 'sweetalert2'
export const Card = ({ data }) => {
    const { products, setProducts } = useContext(ProductsContext)
    const theme = useTheme()
    const navigate = useNavigate()
    return <ContentCard theme={theme.info}>
        <Description text={data.title} color={'primary'} bold={true} />
        <ImageCircle imgCircle={data.image} />
        <div style={{ display: 'flex', width: '100%', gap: '10px' }}>
            <ButtonCard color={theme.primary} text='Ver mas' handleClick={() => navigate(`/shop/${data.id}`)} />

            <ButtonCard color={theme.info} text={`$${data.price}`} handleClick={() => {
                Swal.fire({
                    title: 'Agregado al carrito!',
                    text: data.title,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
                setProducts([...products, data])
            }} />
        </div>
    </ContentCard>
}