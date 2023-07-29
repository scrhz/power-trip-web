import { createClient } from 'contentful'
import getConfig from '../utils/config'

const config = getConfig(process.env.CONTENTFUL_ENVIRONMENT)

export const client = createClient({
    space: config.spaceId,
    accessToken: config.accessToken,
    environment: config.environment
})