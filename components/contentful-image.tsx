import Image from 'next/image'

export default (props) => {
    return <Image className="coverImage" loader={contentfulLoader} {...props} />
}

const contentfulLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}
