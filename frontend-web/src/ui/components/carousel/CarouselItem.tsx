import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { isSerie } from '../../../models/serie';
import { MainNavigation } from '../../../navigation/MainNavigation';
import { Cinematography } from '../../../utils/types';
import './style.css';

type CarouselItemProps = {
    content: Cinematography;
};

export const CarouselItem: React.FC<CarouselItemProps> = ({ content }) => {
    const navigate = useNavigate();

    const contentOnClick = useCallback(() => {
        const path = (isSerie(content) ? MainNavigation.series.path : MainNavigation.movies.path) + content.id;
        navigate(path, { state: content });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [content.id, content.title, navigate]);

    return (
        <article className="carousel-item-container" onClick={contentOnClick}>
            <img className="carousel-item-img" alt={content.poster.caption} src={content.thumbnail.url} />
            <div className="carousel-item-caption-container">
                <p>{content.poster.caption}</p>
            </div>
        </article>
    );
};
