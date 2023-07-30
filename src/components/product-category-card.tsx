import Link from 'next/link'
import { CardImage } from './contentful-image'
import speakerIcon from '../../resources/speaker-icon.png'

export default ({ productCategory }) => {
    const { name, slug, image } = productCategory.fields

    return (
        <div className="grid-card">
            <Link
                href={`/products/product-categories/${slug}`}
                aria-label={name}
            >
                <div>
                    <CardImage
                        alt={`Cover image for: ${name}`}
                        src={image?.fields?.file?.url ?? speakerIcon.src}
                        width={'200'}
                        height={'200'}
                    />
                </div>
                <ProductLabel categoryName={productCategory?.fields?.name} />
            </Link>
        </div>
    )
}

const ProductLabel = (props) => {
    return (
        <div>
            <h3 className="grid-label-header">{props.categoryName}</h3>
        </div>
    )
}
