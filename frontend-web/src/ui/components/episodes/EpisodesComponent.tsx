import { Episodes } from '../../../models/episode';
import { Media } from '../../../models/media';
import { strings } from '../../../res/strings';
import { EpisodeComponent } from './EpisodeComponent';
import './style.css';

type EpisodesComponentProps = {
    episodes: Episodes;
    setSelectedVideo: React.Dispatch<React.SetStateAction<Media | null>>;
};

export const EpisodesComponent: React.FC<EpisodesComponentProps> = ({ episodes, setSelectedVideo }) => {
    return (
        <div className="episodes-container">
            <h2>{strings.fr.components.episodes.episodes}</h2>
            <ul className="episodes">
                {episodes.map(episode => {
                    return <EpisodeComponent episode={episode} setSelectedVideo={setSelectedVideo} />;
                })}
            </ul>
        </div>
    );
};
