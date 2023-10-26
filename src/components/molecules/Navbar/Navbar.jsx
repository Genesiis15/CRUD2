import { Link } from '../../atoms/Link/Link'
import { LinkIcon } from '../../atoms/LinkIcon/LinkIcon'
import { NavbarStyle } from './styles'
import { Brand } from '../../atoms/Brand/Brand'
import { Search } from '../../atoms/Search/Search'
import { FaSearch, FaCartArrowDown } from 'react-icons/fa';
import { ProductsContext } from '../../../context/productsContext'
import { useContext } from 'react';
export const Navbar = () => {
    const { products } = useContext(ProductsContext)
    return <NavbarStyle>

        <Brand img={'https://images.vexels.com/media/users/3/201898/isolated/preview/55be9a1a39abff39bc3596e8ddd224cd-trazo-de-huella-de-perro-azul.png'} link={'/'} />
        <Search placeholder={'Search'} onChange={(value) => {
            console.log(value)
        }} >
            <FaSearch style={{ cursor: 'pointer' }} />
        </Search>
        <div style={{ display: 'flex' }}>
            <Link description={'Home'} link={'/'} color='secondary' />
            <Link description={'Shop'} link={'/shop'} color='secondary' />

            <LinkIcon description={`${products.length}`} link={'/cart'} color='secondary'>
                <FaCartArrowDown />
            </LinkIcon>
        </div>

    </NavbarStyle>
}
