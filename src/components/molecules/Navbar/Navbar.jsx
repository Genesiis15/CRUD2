import { useState, useEffect } from 'react';

import { Link } from '../../atoms/Link/Link'
import { NavbarStyle } from './styles'
import { Brand } from '../../atoms/Brand/Brand'
import { Search } from '../../atoms/Search/Search'
import { FaSearch, FaList } from 'react-icons/fa';
import { useTheme } from 'styled-components'
export const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const theme = useTheme()
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return <NavbarStyle>

        <Brand img={'https://cdn-icons-png.flaticon.com/128/1400/1400491.png'} link={'/'} />
        <Search placeholder={'Search'} onChange={(value) => {
            console.log(value)
        }} >
            <FaSearch style={{ cursor: 'pointer' }} />
        </Search>
        {!isMobile ? <div >
            <Link description={'Home'} link={'/'} color='secondary' />
            <Link description={'Shop'} link={'/shop'} color='secondary' />
            <Link description={'About'} link={'/about'} color='secondary' />
        </div> : <FaList color={theme.secondary} />}


    </NavbarStyle>
}
