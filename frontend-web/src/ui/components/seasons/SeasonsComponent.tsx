import { useCallback, useState } from 'react';
import { Episodes } from '../../../models/episode';
import { Media } from '../../../models/media';
import { Season, Seasons } from '../../../models/season';
import { EpisodesComponent } from '../episodes/EpisodesComponent';
import './style.css';

type SeasonsComponentProps = {
    seasons: Seasons;
    setSelectedVideo: React.Dispatch<React.SetStateAction<Media | null>>;
};

export const SeasonsComponent: React.FC<SeasonsComponentProps> = ({ seasons, setSelectedVideo }): JSX.Element => {
    const [selectedEpisodes, setSelectedEpisodes] = useState<Episodes>([]);
    const [selectedSeason, setSelectedSeason] = useState(-1);

    const selectSeason = useCallback(
        (seasonNumber: number, episodes: Episodes) => {
            setSelectedSeason(seasonNumber);
            setSelectedEpisodes(episodes);
        },
        [setSelectedSeason, setSelectedEpisodes]
    );

    return (
        <div className="seasons-container">
            <ul className="seasons">
                {seasons.map((season: Season) => {
                    return (
                        <li
                            key={season.seasonNumber}
                            className={selectedSeason === season.seasonNumber ? 'active' : ''}
                            onClick={() => selectSeason(season.seasonNumber, season.episodes)}
                        >
                            {season.seasonNumber}
                        </li>
                    );
                })}
            </ul>
            {selectedSeason !== -1 ? (
                <EpisodesComponent episodes={selectedEpisodes} setSelectedVideo={setSelectedVideo} />
            ) : (
                <></>
            )}
        </div>
    );
};
