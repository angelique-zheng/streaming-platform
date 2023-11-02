import { Episodes } from './episode';

export type Season = {
    title: string;
    seasonNumber: number;
    numberOfEpisodes: number;
    episodes: Episodes;
};
export type Seasons = Array<Season>;
