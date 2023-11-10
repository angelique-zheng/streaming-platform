import React, { useCallback, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Media } from '../../../models/media';
import { Serie } from '../../../models/serie';
import { strings } from '../../../res/strings';
import { convertTimestampsToStringDate } from '../../../utils/date';
import { GenreList } from '../../components/genreList/GenreList';
import { PersonList } from '../../components/personList/PersonList';
import { SeasonsComponent } from '../../components/seasons/SeasonsComponent';
import { VideoModal } from '../../components/videoModal/VideoModal';
import './style.css';

type LocationState = Serie;

export const SerieDetails: React.FC = () => {
    const location = useLocation();
    const serie = location.state as LocationState;
    const [isSynopsisSelected, setIsSynopsisSelected] = useState(true);
    const releaseDate = useMemo(() => convertTimestampsToStringDate(serie.releaseDate), [serie.releaseDate]);
    const [selectedVideo, setSelectedVideo] = useState<Media | null>(null);
    const closeVideoModal = useCallback(() => {
        setSelectedVideo(null);
    }, [setSelectedVideo]);

    return (
        <main className="detail-main">
            <img className="poster" alt={serie.poster.caption} src={serie.poster.url} />
            <section className="informations">
                <h1>{serie.title}</h1>
                <div className="genres-rating-container">
                    <GenreList genres={serie.genres} />
                    {serie.rating ? <p>{serie.rating}</p> : <></>}
                </div>

                <p>{`${strings.fr.components.details.releaseDate} : ${releaseDate}`}</p>
                <PersonList people={serie.directors} prefix={strings.fr.components.details.producedBy} />
                <PersonList people={serie.castings} prefix={strings.fr.components.details.mainActors} />
            </section>

            <section className="synopsis-seasons">
                <div className="tabs">
                    <h2 className={isSynopsisSelected ? 'active' : ''} onClick={() => setIsSynopsisSelected(true)}>
                        {strings.fr.components.details.synopsis}
                    </h2>
                    <h2 className={isSynopsisSelected ? '' : 'active'} onClick={() => setIsSynopsisSelected(false)}>
                        {strings.fr.components.details.seasons}
                    </h2>
                </div>
                {isSynopsisSelected ? (
                    <p>{serie.synopsis}</p>
                ) : (
                    <SeasonsComponent seasons={serie.seasons} setSelectedVideo={setSelectedVideo} />
                )}
            </section>
            {selectedVideo ? (
                <VideoModal closeModal={closeVideoModal} url={selectedVideo.url} type={selectedVideo.mime} />
            ) : (
                <></>
            )}
        </main>
    );
};
