import { Link } from '../../atoms/Link/Link'
import { NavbarStyle } from './styles'
import { Brand } from '../../atoms/Brand/Brand'
import { Search } from '../../atoms/Search/Search'
import { FaSearch } from 'react-icons/fa';
export const Navbar = () => {
    return <NavbarStyle>

        <Brand img={'https://cdn-icons-png.flaticon.com/128/1400/1400491.png'} link={'/'} />
        <Search placeholder={'Search'} onChange={(value) => {
            console.log(value)
        }} >
            <FaSearch style={{ cursor: 'pointer' }} />
        </Search>
        <div >
            <Link description={'Home'} link={'/'} color='secondary' />
            <Link description={'Shop'} link={'/shop'} color='secondary' />
            <Link description={'About'} link={'/about'} color='secondary' />
        </div>

    </NavbarStyle>
}
