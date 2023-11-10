import { DecoderFunction, array, number, record, string } from 'typescript-json-decoder';
import { DecoderError } from '../utils/errors/DecoderError';
import { Information, InformationDecoder } from './information';
import { Media, MediaDecoder } from './media';
import { People, PeopleDecoder } from './person';

export type Movie = Information & {
    id: number;
    duration: number;
    directors: People;
    castings: People;
    genres: string[];
    video: Media;
};

export const MovieDecoder: DecoderFunction<Movie> = (value: unknown) => {
    try {
        if (typeof value === 'object' && value !== null && 'informations' in value) {
            const information = InformationDecoder(value.informations);
            const movieWithoutInformation = record({
                id: number,
                duration: number,
                directors: PeopleDecoder,
                castings: PeopleDecoder,
                genres: array(string),
                video: MediaDecoder
            })(value);
            return { ...information, ...movieWithoutInformation };
        }
        throw new DecoderError("Missing 'informations' attribute");
    } catch (error) {
        if (error instanceof DecoderError) {
            throw error;
        }
        throw new DecoderError(error);
    }
};
