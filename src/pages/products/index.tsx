import { client } from '../../utils/contentful-host';
import CategoryCard from '../../components/product-category-card';

export default ({ productCategories }) => {
    return (
        <div className="m-2.5">
            <h2>Equipment Hire</h2>
            <div className="grid">
                {productCategories.map((productCategory) => (
                    <CategoryCard key={productCategory.fields.slug} productCategory={productCategory} />
                ))}
            </div>
        </div>
    );
};

export const getStaticProps = async () => {
    const response = await client.getEntries({
        content_type: 'productCategory',
    });
    return {
        props: {
            productCategories: response.items,
            revalidate: 60,
        },
    };
};
