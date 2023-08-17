export default (environment, previewMode = false) => {
    let accessToken = ''

    if (environment == 'develop') {
        accessToken = process.env.CONTENTFUL_DEVELOP_TOKEN
    } else {
        accessToken = process.env.CONTENTFUL_ACCESS_TOKEN
    }

    return {
        accessToken,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        environment
    }
}