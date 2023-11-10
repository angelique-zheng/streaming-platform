import { DecoderFunction, array, number, record, string } from 'typescript-json-decoder';
import { DecoderError } from '../utils/errors/DecoderError';
import { Information, InformationDecoder } from './information';
import { People, PeopleDecoder } from './person';
import { Seasons, SeasonsDecoder } from './season';

export type Serie = Information & {
    id: number;
    numberOfSeasons: number;
    directors: People;
    castings: People;
    genres: string[];
    seasons: Seasons;
};

export const SerieDecoder: DecoderFunction<Serie> = (value: unknown) => {
    try {
        if (typeof value === 'object' && value !== null && 'informations' in value) {
            const information = InformationDecoder(value.informations);
            const serieWithoutInformation = record({
                id: number,
                numberOfSeasons: number,
                directors: PeopleDecoder,
                castings: PeopleDecoder,
                genres: array(string),
                seasons: SeasonsDecoder
            })(value);
            return { ...information, ...serieWithoutInformation };
        }
        throw new DecoderError("Missing 'informations' attribute");
    } catch (error) {
        if (error instanceof DecoderError) {
            throw error;
        }
        throw new DecoderError(error);
    }
};
