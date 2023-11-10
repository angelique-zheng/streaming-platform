import { DecoderFunction, field, intersection, record, union } from 'typescript-json-decoder';
import { Genre, GenreDecoder } from '../models/genre';
import { Movie, MovieDecoder } from '../models/movie';
import { Serie, SerieDecoder } from '../models/serie';
import { constant } from '../utils/decoder';
import { StrapiError } from '../utils/errors/StrapiError';

export type StrapiEvents = 'entry.create' | 'entry.update' | 'entry.delete' | 'entry.publish' | 'entry.unpublish';

export type StrapiModel = 'movie' | 'serie' | 'genre';

type StrapiMoviePayload = {
    model: 'movie';
    entry: Movie;
};

type StrapiSeriePayload = {
    model: 'serie';
    entry: Serie;
};

type StrapiGenrePayload = {
    model: 'genre';
    entry: Genre;
};

export type StrapiPayload = {
    event: StrapiEvents;
} & (StrapiMoviePayload | StrapiSeriePayload | StrapiGenrePayload);

const StrapiMoviePayloadDecoder: DecoderFunction<StrapiMoviePayload> = (value: unknown) => {
    return record({
        model: constant('movie' as const),
        entry: MovieDecoder
    })(value);
};

const StrapiSeriePayloadDecoder: DecoderFunction<StrapiSeriePayload> = (value: unknown) => {
    return record({
        model: constant('serie' as const),
        entry: SerieDecoder
    })(value);
};

const StrapiGenrePayloadDecoder: DecoderFunction<StrapiGenrePayload> = (value: unknown) => {
    return record({
        model: constant('genre' as const),
        entry: GenreDecoder
    })(value);
};

export const StrapiPayloadDecoder: DecoderFunction<StrapiPayload> = (value: unknown) => {
    try {
        return intersection(
            record({
                event: field(
                    'event',
                    union('entry.create', 'entry.update', 'entry.delete', 'entry.publish', 'entry.unpublish')
                )
            }),
            union(StrapiMoviePayloadDecoder, StrapiSeriePayloadDecoder, StrapiGenrePayloadDecoder)
        )(value);
    } catch (error) {
        throw new StrapiError('Payload does not match StrapiPayload type');
    }
};
