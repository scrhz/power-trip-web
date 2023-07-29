import Image from 'next/legacy/image'

export default (props) => {
    return (
        <Image
            className="coverImage"
            layout="responsive"
            objectFit="contain"
            objectPosition="center"
            loader={contentfulLoader}
            {...props}
        />
    )
}

const contentfulLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}
