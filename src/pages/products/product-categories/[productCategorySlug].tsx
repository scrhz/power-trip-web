import { client } from '../../../utils/contentful-host'
import ProductCard from '../../../components/product-card'

export default ({ products }) => {
    return (
        <div className="page">
            <h2>{products?.[0].fields.category.fields.name}</h2>
            <div className="grid">
                {products.map((product) => (
                    <ProductCard key={product.fields.slug} product={product} />
                ))}
            </div>
        </div>
    )
}

export const getStaticProps = async ({ params }) => {
    const { productCategorySlug } = params
    const response = await client.getEntries({
        'content_type': 'product',
        'fields.category.sys.contentType.sys.id': 'productCategory',
        'fields.category.fields.slug': productCategorySlug,
    })

    return {
        props: {
            products: response.items,
            revalidate: 60,
        },
    }
}

export const getStaticPaths = async () => {
    const response = await client.getEntries({
        content_type: 'productCategory',
    })

    const paths = response.items.map((item) => ({
        params: {
            productCategorySlug: item.fields.slug,
        },
    }))

    return {
        paths,
        fallback: false,
    }
}
