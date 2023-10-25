import Link from 'next/link'
import { CardImage } from './contentful-image'
import speakerIcon from '../../resources/speaker-icon.png'

export default ({ product }) => {
    const { modelName, brandName, slug, category, image, shortDescription } =
        product.fields

    return (
        <div className="grid-card">
            <Link href={`/products/${slug}`} aria-label={modelName}>
                <div>
                    <CardImage
                        alt={`Cover image for: ${modelName}`}
                        src={image?.fields?.file?.url ?? speakerIcon.src}
                    />
                </div>
                <ProductLabel
                    modelName={modelName}
                    brandName={brandName}
                    category={category?.fields?.name}
                    shortDescription={shortDescription}
                />
            </Link>
        </div>
    )
}

const ProductLabel = (props) => {
    return (
        <div>
            <h3 className="grid-label-header">
                {props.brandName} - {props.modelName}
            </h3>
            <h4 className="grid-label-header">
                {props.shortDescription ?? props.category}
            </h4>
        </div>
    )
}
