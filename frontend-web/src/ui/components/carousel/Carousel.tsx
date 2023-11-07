import { Carousel as AntdCarousel } from 'antd';
import { Cinematography } from '../../../utils/types';
import { CarouselItem } from './CarouselItem';
import './style.css';

type CarouselProps = {
    contents: Cinematography[];
};

export const Carousel: React.FC<CarouselProps> = ({ contents }) => {
    return (
        <AntdCarousel className="carousel" autoplay>
            {contents.map(content => (
                <CarouselItem key={content.id} content={content} />
            ))}
        </AntdCarousel>
    );
};
