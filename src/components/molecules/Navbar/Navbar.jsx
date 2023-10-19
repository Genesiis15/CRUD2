import {Link} from '../../atoms/Link/Link'
import {NavbarStyle} from './styles'
import {Brand} from '../../atoms/Brand/Brand'

export const Navbar =() =>{
    return <NavbarStyle>

    <Brand img={'https://cdn-icons-png.flaticon.com/128/1400/1400491.png'} link={'/'}/>
<div>
<Link description={'Home'} link={'/'} color='secondary'/>
    <Link description={'Service'} link={'/services'} color='secondary'/>
    <Link description={'About'} link={'/about'} color='secondary'/>
</div>

    </NavbarStyle>
}
