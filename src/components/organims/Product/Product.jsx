import { useParams } from 'react-router-dom'
import { useProduct } from '../../../hooks/useProduct'
import { ProductDetail } from '../../molecules/ProductDetail/ProductDetail'
export const Product = () => {
    const { id } = useParams()
    const { product } = useProduct(id, 'products')
    return (
        <div>
            <ProductDetail data={product} />
        </div>
    )
}
