import { DecoderFunction, boolean, number, optional, record, string } from 'typescript-json-decoder';
import { decodeDateToTimestamp } from '../utils/decoder';
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
};
