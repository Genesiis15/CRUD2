import { GroupCart } from '../../components/organims/GroupCart/GroupCart'
import { Title } from '../../components/atoms'
export const CartView = () => {
    return (
        <>
            <Title title={'Frenchie - Cart'} color={'secondary'} />
            <GroupCart />
        </>
    )
}
