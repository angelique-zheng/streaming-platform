import { useCallback } from 'react';
import { Episode } from '../../../models/episode';
import { Media } from '../../../models/media';
import { strings } from '../../../res/strings';

type EpisodeComponentProps = {
    episode: Episode;
    setSelectedVideo: React.Dispatch<React.SetStateAction<Media | null>>;
};

export const EpisodeComponent: React.FC<EpisodeComponentProps> = ({ episode, setSelectedVideo }) => {
    const playVideo = useCallback(() => {
        setSelectedVideo(episode.video);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setSelectedVideo, episode.video.url]);

    return (
        <li key={episode.episodeNumber} className="episode-container" onClick={playVideo}>
            <img className="episode-img" alt={episode.title} src={episode.image.url} />
            <div className="episode-informations">
                <h2>{`${strings.fr.components.episodes.episode} ${episode.episodeNumber}: ${episode.title}`}</h2>
                <p>{episode.description}</p>
            </div>
        </li>
    );
};
