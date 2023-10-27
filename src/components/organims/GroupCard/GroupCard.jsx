import { useEffect, useState } from 'react'
import { getQuery } from '../../../queries'
import { Title } from '../../atoms/Title/Title'

import { Content, ContentItem } from './styles'
import { Card } from '../../molecules/Card/Card'

export const GroupCard = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getQuery('products').then(res => setProducts(res))
    }, []);

    return (
        <Content>
            <Title title={'Frenchie - Shop'} color={"secondary"} />
            <ContentItem>
                {products.map((data) => <Card key={data.id} data={data} />)}
            </ContentItem>
        </Content>
    )
}
