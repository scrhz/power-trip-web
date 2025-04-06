export default (environment) => {
    return {
        accessToken: process.env.CONTENTFUL_PREVIEW === 'true' ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        environment,
        host: process.env.CONTENTFUL_PREVIEW === 'true' ? 'preview.contentful.com' : 'cdn.contentful.com'
    }
}