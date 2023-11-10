import { PlayCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Movie } from '../../../models/movie';
import { strings } from '../../../res/strings';
import { convertTimestampsToStringDate } from '../../../utils/date';
import { GenreList } from '../../components/genreList/GenreList';
import { PersonList } from '../../components/personList/PersonList';
import { VideoModal } from '../../components/videoModal/VideoModal';
import './style.css';

type LocationState = Movie;

export const MovieDetails: React.FC = () => {
    const location = useLocation();
    const movie = location.state as LocationState;
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const releaseDate = useMemo(() => convertTimestampsToStringDate(movie.releaseDate), [movie.releaseDate]);

    const playCloseVideo = () => {
        setIsVideoModalOpen(!isVideoModalOpen);
    };

    return (
        <main className="detail-main">
            <img className="poster" alt={movie.poster.caption} src={movie.poster.url} />
            <section className="informations">
                <h1>{movie.title}</h1>
                <div className="genres-rating-container">
                    <GenreList genres={movie.genres} />
                    {movie.rating ? <p className="rating">{movie.rating}</p> : <></>}
                </div>

                <p>{`${strings.fr.components.details.releaseDate} : ${releaseDate}`}</p>
                <PersonList people={movie.directors} prefix={strings.fr.components.details.producedBy} />
                <PersonList people={movie.castings} prefix={strings.fr.components.details.mainActors} />
                <Button className="play-button" type="primary" icon={<PlayCircleOutlined />} onClick={playCloseVideo}>
                    {strings.fr.components.details.play}
                </Button>
            </section>

            <section className="synopsis">
                <h2>{strings.fr.components.details.synopsis}</h2>
                <p>{movie.synopsis}</p>
            </section>

            {isVideoModalOpen ? (
                <VideoModal closeModal={playCloseVideo} url={movie.video.url} type={movie.video.mime} />
            ) : (
                <></>
            )}
        </main>
    );
};
