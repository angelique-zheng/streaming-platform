import { DecoderFunction, array, number, record, string } from 'typescript-json-decoder';
import { DecoderError } from '../utils/errors/DecoderError';

export type Genre = {
    id: number;
    name: string;
};

export const GenreDecoder: DecoderFunction<Genre> = (value: unknown) => {
    try {
        return record({
            id: number,
            name: string
        })(value);
    } catch (error) {
        throw new DecoderError(error);
    }
};

export type Genres = Array<Genre>;

export const GenresDecoder: DecoderFunction<Genres> = (value: unknown) => {
    try {
        return array(GenreDecoder)(value);
    } catch (error) {
        if (error instanceof DecoderError) {
            throw error;
        }
        throw new DecoderError(error);
    }
};
