import Image from 'next/legacy/image'
import speakerIcon from '../../resources/speaker-icon.png'

export const CardImage = (props) => {
    return (
        <ContentfulImage
            layout="responsive"
            width={'200'}
            height={'200'}
            objectFit={'contain'}
            {...props}
        />
    )
}

export const ProductDetailImage = (props) => {
    return (
        <ContentfulImage
            width={'300'}
            height={'300'}
            objectFit={'contain'}
            {...props}
        />
    )
}

export const AudioServiceImage = (props) => {
    return (
        <ContentfulImage
            width={'300'}
            height={'300'}
            objectFit={'cover'}
            {...props}
        />
    )
}

const ContentfulImage = (props) => {
    return (
        <Image
            objectPosition="center"
            loader={contentfulLoader}
            placeholder="blur"
            blurDataURL={speakerIcon}
            {...props}
        />
    )
}

const contentfulLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}
