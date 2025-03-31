import Link from 'next/link'
import { CardImage } from './contentful-image'
import speakerIcon from '../../resources/speaker-icon.png'
import {
    Card,
    CardHeader,
    CardDescription,
    CardContent,
    CardFooter,
    CardTitle,
} from '@/components/ui/card'
import { Car } from 'lucide-react'

export default ({ product }) => {
    const { modelName, brandName, slug, image, shortDescription, category, pricePerDay } =
        product.fields

    return (
        <Card>
            <Link href={`/products/${slug}`} aria-label={modelName}>
                <CardHeader>
                    <CardTitle>
                        {modelName} - {brandName}
                    </CardTitle>
                    <CardDescription>{shortDescription ?? category}</CardDescription>
                </CardHeader>
                <CardContent>
                    <CardImage
                        alt={`Cover image for: ${modelName}`}
                        src={image?.fields?.file?.url ?? speakerIcon.src}
                    />
                </CardContent>
                <CardFooter>£{pricePerDay} per evening</CardFooter>
            </Link>
        </Card>
    )
}
