import { useState, useEffect } from 'react';

import { Link } from '../../atoms/Link/Link'
import { LinkIcon } from '../../atoms/LinkIcon/LinkIcon'
import { NavbarStyle, Margin, Modal, ModalUl } from './styles'
import { Brand } from '../../atoms/Brand/Brand'
import { Search } from '../../atoms/Search/Search'
import { FaSearch, FaCartArrowDown, FaList } from 'react-icons/fa';
import { ProductsContext } from '../../../context/productsContext'
import { useContext } from 'react';
import { useTheme } from 'styled-components'
import { useParams } from 'react-router-dom'

export const Navbar = () => {
    const params = useParams()
    const { products } = useContext(ProductsContext)
    const [isMobile, setIsMobile] = useState(false);
    const [modal, setModal] = useState(false)
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

    useEffect(() => {
        setModal(false)
    }, [params]);
    return <>
        <NavbarStyle>

            <Brand img={'https://images.vexels.com/media/users/3/201898/isolated/preview/55be9a1a39abff39bc3596e8ddd224cd-trazo-de-huella-de-perro-azul.png'} link={'/'} />
            <Search placeholder={'Search'} onChange={(value) => {
                console.log(value)
            }} >
                <FaSearch style={{ cursor: 'pointer' }} />
            </Search>
            {!isMobile ? <div style={{ display: 'flex' }}>
                <Link description={'Home'} link={'/'} color='secondary' />
                <Link description={'Shop'} link={'/shop'} color='secondary' />

                <LinkIcon description={`${products.length}`} link={'/cart'} color='secondary'>
                    <FaCartArrowDown />
                </LinkIcon>
            </div>
                : <>
                    <FaList color={theme.secondary} onClick={() => setModal(!modal)} />
                    {modal && <Modal>
                        <ModalUl >
                            <li><Link description={'Home'} link={'/'} color='secondary' /></li>
                            <li><Link description={'Shop'} link={'/shop'} color='secondary' /></li>
                            <li><Link description={'Cart'} link={'/cart'} color='secondary' /> </li>

                        </ModalUl>
                    </Modal>}
                </>

            }


        </NavbarStyle>
        <Margin ></Margin>
    </>
}
