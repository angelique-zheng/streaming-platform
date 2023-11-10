import { DecoderFunction, array, number, record, string } from 'typescript-json-decoder';
import { DecoderError } from '../utils/errors/DecoderError';
import { Media, MediaDecoder } from './media';

export type Episode = {
    title: string;
    description: string;
    episodeNumber: number;
    video: Media;
    image: Media;
};

export const EpisodeDecoder: DecoderFunction<Episode> = (value: unknown) => {
    try {
        return record({
            title: string,
            description: string,
            episodeNumber: number,
            video: MediaDecoder,
            image: MediaDecoder
        })(value);
    } catch (error) {
        if (error instanceof DecoderError) {
            throw error;
        }
        throw new DecoderError(error);
    }
};

export type Episodes = Array<Episode>;

export const EpisodesDecoder: DecoderFunction<Episodes> = (value: unknown) => {
    try {
        return array(EpisodeDecoder)(value);
    } catch (error) {
        if (error instanceof DecoderError) {
            throw error;
        }
        throw new DecoderError(error);
    }
};
