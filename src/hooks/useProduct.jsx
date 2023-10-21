import { getProduct } from '../queries'
import { useEffect, useState } from 'react'
export const useProduct = (id, table) => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        getProduct(table, id).then(res => setProduct(res))
    }, [])

    return {
        product
    }
}
