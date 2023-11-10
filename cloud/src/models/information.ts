import { DecoderFunction, boolean, number, optional, record, string } from 'typescript-json-decoder';
import { decodeDateToTimestamp } from '../utils/decoder';
import { DecoderError } from '../utils/errors/DecoderError';
import { Media, MediaDecoder } from './media';

export type Information = {
    title: string;
    synopsis: string;
    releaseDate: number;
    poster: Media;
    rating?: number;
    company: string;
    trending: boolean;
    thumbnail: Media;
};

export const InformationDecoder: DecoderFunction<Information> = (value: unknown) => {
    try {
        return record({
            title: string,
            synopsis: string,
            releaseDate: decodeDateToTimestamp,
            poster: MediaDecoder,
            rating: optional(number),
            company: string,
            trending: boolean,
            thumbnail: MediaDecoder
        })(value);
    } catch (error) {
        if (error instanceof DecoderError) {
            throw error;
        }
        throw new DecoderError(error);
    }
};
