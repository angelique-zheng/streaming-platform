import { Cinematography } from '../../../utils/types';
import { MosaicItem } from './MosaicItem';
import './style.css';

type MosaicProps = {
    contents: Cinematography[];
};

export const Mosaic: React.FC<MosaicProps> = ({ contents }) => {
    return (
        <section className="mosaic-container">
            {contents.map(content => (
                <MosaicItem key={`${content.id} - ${content.title}`} content={content} />
            ))}
        </section>
    );
};
