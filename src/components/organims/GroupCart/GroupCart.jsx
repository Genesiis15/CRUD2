import { useContext } from 'react'
import { ProductsContext } from '../../../context/productsContext'
import { ItemCart } from '../../molecules/ItemCart/ItemCart'
import { GroupCartStyled } from './styles'
import { ButtonCard } from '../../atoms/ButtonCard/ButtonCard'
import { useTheme } from 'styled-components';
import { sendMessage } from '../../../whatsapp'
import { Title } from '../../atoms/Title/Title'
import { useNavigate } from 'react-router-dom'

export const GroupCart = () => {
    const theme = useTheme()
    const navigate = useNavigate()
    const { products } = useContext(ProductsContext)
    return <>

        {products.length > 0 ? <GroupCartStyled>
            {products.map((valor) => {
                return <>
                    <ItemCart data={valor} />
                </>
            })}
            <ButtonCard theme={theme.info} color={theme.info} text={`Comprar`} handleClick={() => sendMessage(products)} />
        </GroupCartStyled>
            : <div style={{ textAlign: 'center' }}>
                <Title title={'FrenchieLovers el carrito esta vacio'} color={'primary'} />
                <ButtonCard theme={theme.info} color={theme.info} text={`Sigue Comprando`} handleClick={() => navigate('/shop')} />

            </div>
        }
    </>
}

// products.length > 0  ? button : "esta vacio" 