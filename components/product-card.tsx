import Link from 'next/link'
import ContentfulImage from './contentful-image'
import Image from 'next/image'

export default ({ product }) => {
    const { modelName, brandName, slug, category, coverImage } = product.fields

    return (
        <div className="product-card">
            <Link href={`/products/${slug}`} aria-label={modelName}>
                <h3>{modelName}</h3>
                <h4>{brandName}</h4>
                <h5>{category}</h5>
                <ContentfulImage
                    alt={`Cover image for: ${modelName}`}
                    src={coverImage?.fields?.file?.url}
                    width={'200'}
                    height={'200'}
                />
            </Link>
        </div>
    )
}
