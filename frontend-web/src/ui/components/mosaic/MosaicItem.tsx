import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { isSerie } from '../../../models/serie';
import { MainNavigation } from '../../../navigation/MainNavigation';
import { Cinematography } from '../../../utils/types';
import './style.css';

type MosaicItemProps = {
    content: Cinematography;
};

export const MosaicItem: React.FC<MosaicItemProps> = ({ content }) => {
    const navigate = useNavigate();

    const contentOnClick = useCallback(() => {
        const path = (isSerie(content) ? MainNavigation.series.path : MainNavigation.movies.path) + content.id;
        navigate(path, { state: content });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [content.id, content.title, navigate]);

    return (
        <article className="mosaic-item" onClick={contentOnClick}>
            <img className="mosaic-item-img" alt={content.poster.caption} src={content.thumbnail.url} />
        </article>
    );
};
