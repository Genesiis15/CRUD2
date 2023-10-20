import { useEffect, useState } from 'react'
import { getQuery } from '../../../queries'
import { Title } from '../../atoms/Title/Title'

export const GroupCard = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getQuery('products').then(res => setProducts(res))
    }, []);

    return (


        <div>

            <Title title={'Frenchie'} />
            <div style={{ marginBottom: '150px' }}>
                {products.map(({ id, title, image }) => <div key={id}>
                    <h1>{title}</h1>
                    <img src={image} width={200} height={200} />
                </div>)}
            </div>
        </div>
    )
}
