import { useEffect, useState } from 'react'
import { getQuery } from '../../../queries'
import { Title } from '../../atoms/Title/Title'
import { useTheme } from 'styled-components'

import { Card } from '../../molecules/Card/Card'

export const GroupCard = () => {
    const [products, setProducts] = useState([]);
    const theme = useTheme()

    useEffect(() => {
        getQuery('products').then(res => setProducts(res))
    }, []);

    return (


        <div>
            <Title title={'Frenchie - Shop'} color={theme.secondary} />


            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '150px' }}>
                {products.map((data) => <Card key={data.id} data={data} />)}
            </div>
        </div>
    )
}
