import { useContext, useState } from 'react'
import { ProductsContext } from '../../../context/productsContext'
import { ItemCart } from '../../molecules/ItemCart/ItemCart'
import { GroupCartStyled } from './styles'
import { ButtonCard } from '../../atoms/ButtonCard/ButtonCard'
import { useTheme } from 'styled-components';
import { sendMessage } from '../../../whatsapp'
import { Title } from '../../atoms/Title/Title'
import { useNavigate } from 'react-router-dom'
import { Description } from '../../atoms'

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
            <div style={{ textAlign: 'end', paddingRight: '30px' }}>
                <Description text={`Total de $${products.reduce((total, obj) => {
                    return total + obj.price;
                }, 0)}`} color={'secondary'} bold={true} />
            </div>

            <ButtonCard theme={theme.info} color={theme.info} text={`Comprar`} handleClick={() => sendMessage(products)} />
        </GroupCartStyled>
            : <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                <Title title={'FrenchieLovers el carrito esta vacio'} color={'primary'} />
                <ButtonCard theme={theme.info} color={theme.info} text={`Sigue Comprando`} handleClick={() => navigate('/shop')} />

            </div>
        }
    </>
}

// products.length > 0  ? button : "esta vacio" 