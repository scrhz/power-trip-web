import { AudioServiceImage } from '../components/contentful-image';
import speakerIcon from '../../resources/speaker-icon.png';
import synthesiserIcon from '../../resources/sequential-pro-3.webp';
import monitorIcon from '../../resources/adam-a7x.webp';
import producerIcon from '../../resources/producer-stock.jpg';
import PageHeader from '../components/page-header';

export default () => {
    return (
        <div className="m-2.5">
            <PageHeader>Audio Services</PageHeader>
            <h3>We offer a range of studio services from engineers with decades of production experience.</h3>
            <AudioServiceCard
                title={'Mixing & Mastering'}
                description={
                    'We can provide mix services to prepare your audio for release and distribution, so you can worry less about the details and concentrate on the creative process.'
                }
                imageSrc={monitorIcon}
            />
            <AudioServiceCard
                title={'Sound Design'}
                description={
                    "Bespoke sounds provide peace of mind in knowing that your project is unique and gives you full ownership & rights. Whether it's for commercial software, video games, advertisement or music, we tailor original sounds to your needs."
                }
                imageSrc={synthesiserIcon.src}
            />
            <AudioServiceCard
                title="Track Feedback & Appraisal"
                description={
                    'Do you feel that your music is missing something to take it to the next level? We can provide feedback to improve both the technical and creative details in your tracks.'
                }
                imageSrc={producerIcon.src}
            />
        </div>
    );
};

const AudioServiceCard = (props) => {
    return (
        <div className="audio-service-card">
            <AudioServiceLabel title={props.title} description={props.description} />
            <AudioServiceImage alt={`Cover image for: ${props.title}`} src={props.imageSrc ?? speakerIcon.src} />
        </div>
    );
};

const AudioServiceLabel = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
};
