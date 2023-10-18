import {Link} from 'react-router-dom'
export const Brand = ({img, link}) =>{
    return <>
    <Link to={link}>
    <img  width={50} src={img}/>
    </Link>
    
    
    </>
}

