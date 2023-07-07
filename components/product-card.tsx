import Link from 'next/link';

export default function ProductCard({ product }) {
    const { modelName, brandName, slug, category, description, pricePerDay, numberOfUnitsAvailable } = product.fields

    return (
        <li>
            <Link href={`/products/${slug}`} aria-label={modelName} />
            <h3>{modelName}</h3>
            <h4>{brandName}</h4>
            <h5>{category}</h5>
        </li>  
    )
}