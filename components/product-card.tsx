import Link from 'next/link'
import ContentfulImage from './contentful-image'
import speakerIcon from '../resources/speaker-icon.png'

export default ({ product }) => {
    const { modelName, brandName, slug, category, coverImage } = product.fields

    return (
        <div className="product-card">
            <Link href={`/products/${slug}`} aria-label={modelName}>
                <div>
                    <ContentfulImage
                        alt={`Cover image for: ${modelName}`}
                        src={coverImage?.fields?.file?.url ?? speakerIcon.src}
                        width={'200'}
                        height={'200'}
                    />
                </div>
                <ProductLabel
                    modelName={modelName}
                    brandName={brandName}
                    category={category}
                />
            </Link>
        </div>
    )
}

const ProductLabel = (props) => {
    return (
        <div>
            <h3 className="product-label-header">{props.modelName}</h3>
            <h4 className="product-label-header">{props.brandName}</h4>
            <h5 className="product-label-header">{props.category}</h5>
        </div>
    )
}
