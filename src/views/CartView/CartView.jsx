import { GroupCart } from '../../components/organims/GroupCart/GroupCart'
import { Title } from '../../components/atoms'
import { Content } from './styles'
export const CartView = () => {
    return (
        <Content>
            <Title title={'Frenchie - Cart'} color={'secondary'} />
            <GroupCart />
        </Content>
    )
}
