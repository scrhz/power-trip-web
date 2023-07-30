import { ProductDetailImage } from '../../components/contentful-image'
import { client } from '../../utils/contentful-host'
import speakerIcon from '../../../resources/speaker-icon.png'

export default ({ product }) => {
    const { modelName, image, description } = product.fields

    return (
        <div className="page">
            <div className="product-detail">
                <div>
                    <ProductDetailImage
                        alt={`Cover image for: ${modelName}`}
                        src={image?.fields?.file?.url ?? speakerIcon.src}
                    />
                </div>
                <ProductDetailLabel product={product} />
            </div>
        </div>
    )
}

const ProductDetailLabel = (props) => {
    const {
        modelName,
        brandName,
        category,
        pricePerDay,
        numberOfUnitsAvailable,
    } = props.product.fields

    const availabilityLabel =
        parseInt(numberOfUnitsAvailable) >= 2
            ? `${numberOfUnitsAvailable} available`
            : null

    return (
        <div>
            <h2>
                {brandName} - {modelName}
            </h2>
            <h3>{category.fields.name}</h3>
            <h4>From £{pricePerDay} per day</h4>
            <h4>{availabilityLabel}</h4>
        </div>
    )
}

export const getStaticProps = async ({ params }) => {
    const { slug } = params
    const response = await client.getEntries({
        'content_type': 'product',
        'fields.slug': slug,
    })

    return {
        props: {
            product: response?.items?.[0],
            revalidate: 60,
        },
    }
}

export const getStaticPaths = async () => {
    const response = await client.getEntries({ content_type: 'product' })
    const paths = response.items.map((item) => ({
        params: { slug: item.fields.slug },
    }))

    return {
        paths,
        fallback: false,
    }
}
