import { ProductDetailImage } from '../../components/contentful-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { client } from '../../utils/contentful-host';
import speakerIcon from '../../../resources/speaker-icon.png';
import BackButton from '../../components/back-button';

export default ({ product }) => {
    const { modelName, image, description } = product.fields;

    return (
        <div className="m-2.5">
            <BackButton />
            <div className="flex flex-row items-center">
                <div className="p-2.5">
                    <ProductDetailImage
                        alt={`Cover image for: ${modelName}`}
                        src={image?.fields?.file?.url ?? speakerIcon.src}
                    />
                </div>
                <div className="p-2.5 text-right flex-1">
                    <ProductDetailLabel product={product} />
                </div>
            </div>
            <div>{documentToReactComponents(description)}</div>
        </div>
    );
};

const ProductDetailLabel = (props) => {
    const { modelName, brandName, category, pricePerDay, numberOfUnitsAvailable } = props.product.fields;

    const availabilityLabel = parseInt(numberOfUnitsAvailable) >= 2 ? `${numberOfUnitsAvailable} available` : null;

    return (
        <div>
            <h2>
                {brandName} - {modelName}
            </h2>
            <h3>{category.fields.name}</h3>
            <h4>From £{pricePerDay} per day</h4>
            <h4>{availabilityLabel}</h4>
        </div>
    );
};

export const getStaticProps = async ({ params }) => {
    const { productSlug } = params;
    const response = await client.getEntries({
        content_type: 'product',
        'fields.slug': productSlug,
    });

    return {
        props: {
            product: response?.items?.[0],
            revalidate: 60,
        },
    };
};

export const getStaticPaths = async () => {
    const response = await client.getEntries({ content_type: 'product' });
    const paths = response.items.map((item) => ({
        params: { productSlug: item.fields.slug },
    }));

    return {
        paths,
        fallback: false,
    };
};
