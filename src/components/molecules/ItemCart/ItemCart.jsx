import { ImageCircle } from '../../atoms/ImageCircle/ImageCircle'
import Swal from 'sweetalert2'
import { ButtonCard } from '../../atoms/ButtonCard/ButtonCard'
import { Description } from '../../atoms/Description/Description'
import { useTheme } from 'styled-components';
import { ItemCartStyled, ContentInfoFooter, Close } from './styles'
import { ProductsContext } from '../../../context/productsContext'
import { useContext } from 'react';


export const ItemCart = ({ data }) => {
    const { products, setProducts } = useContext(ProductsContext)
    const theme = useTheme()

    return <ItemCartStyled>

        <ImageCircle imgCircle={data.image} />
        <div>
            <Description text={data.title} color={'secondary'} bold={true} />

            <ContentInfoFooter>
                <Description text={`$${data.price}`} color={'primary'} />

            </ContentInfoFooter>
        </div>

        <Close>
            <ButtonCard text={"X"} theme={theme.danger} color={theme.danger} handleClick={() => {
                Swal.fire({
                    title: 'Eliminado!',
                    text: data.title,
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 1500
                })
                setProducts(products.filter((valor) => valor.id !== data.id))
            }} />
        </Close>
    </ItemCartStyled>
}

// styles 