import { DecoderFunction, array, number, record, string } from 'typescript-json-decoder';
import { Episodes, EpisodesDecoder } from './episode';

export type Season = {
    title: string;
    seasonNumber: number;
    numberOfEpisodes: number;
    episodes: Episodes;
};

export const SeasonDecoder: DecoderFunction<Season> = (value: unknown) => {
    return record({
        title: string,
        seasonNumber: number,
        numberOfEpisodes: number,
        episodes: EpisodesDecoder
    })(value);
};

export type Seasons = Array<Season>;

export const SeasonsDecoder: DecoderFunction<Seasons> = (value: unknown) => {
    return array(SeasonDecoder)(value);
};
