import { DecoderFunction, array, number, record, string } from 'typescript-json-decoder';
import { DecoderError } from '../utils/errors/DecoderError';
import { Episodes, EpisodesDecoder } from './episode';

export type Season = {
    title: string;
    seasonNumber: number;
    numberOfEpisodes: number;
    episodes: Episodes;
};

export const SeasonDecoder: DecoderFunction<Season> = (value: unknown) => {
    try {
        return record({
            title: string,
            seasonNumber: number,
            numberOfEpisodes: number,
            episodes: EpisodesDecoder
        })(value);
    } catch (error) {
        if (error instanceof DecoderError) {
            throw error;
        }
        throw new DecoderError(error);
    }
};

export type Seasons = Array<Season>;

export const SeasonsDecoder: DecoderFunction<Seasons> = (value: unknown) => {
    try {
        return array(SeasonDecoder)(value);
    } catch (error) {
        if (error instanceof DecoderError) {
            throw error;
        }
        throw new DecoderError(error);
    }
};
