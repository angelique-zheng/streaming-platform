import { DecoderFunction, array, number, record, string } from 'typescript-json-decoder';

export type Genre = {
    id: number;
    name: string;
};

export const GenreDecoder: DecoderFunction<Genre> = (value: unknown) => {
    return record({
        id: number,
        name: string
    })(value);
};

export type Genres = Array<Genre>;

export const GenresDecoder: DecoderFunction<Genres> = (value: unknown) => {
    return array(GenreDecoder)(value);
};
