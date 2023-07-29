import { client } from '../../utils/contentful-host'
import ProductCard from '../../components/product-card'

export default ({ products }) => {
    return (
        <div className="page">
            <h2>Hire</h2>
            <div className="product-grid">
                {products.map((product, i) => (
                    <ProductCard key={product.fields.slug} product={product} />
                ))}
            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    const response = await client.getEntries({ content_type: 'product' })
    return {
        props: {
            products: response.items,
            revalidate: 60,
        },
    }
}
