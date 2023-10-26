import { useEffect, useState } from 'react'
import { getQuery } from '../../../queries'
import { Title } from '../../atoms/Title/Title'
import { useTheme } from 'styled-components'
import { Content, ContentItem } from './styles'
import { Card } from '../../molecules/Card/Card'

export const GroupCard = () => {
    const [products, setProducts] = useState([]);
    const theme = useTheme()

    useEffect(() => {
        getQuery('products').then(res => setProducts(res))
    }, []);

    return (
        <Content>
            <Title title={'Frenchie - Shop'} color={theme.secondary} />
            <ContentItem>
                {products.map((data) => <Card key={data.id} data={data} />)}
            </ContentItem>
        </Content>
    )
}
