import { StrapiError } from './errors/StrapiError';

export const COLLECTIONS = {
    Movies: 'movies',
    Series: 'series',
    Genres: 'genres'
} as const;

export const getCollectionNameFromModel = (model: string) => {
    switch (model) {
        case 'movie':
            return COLLECTIONS.Movies;
        case 'serie':
            return COLLECTIONS.Series;
        case 'genre':
            return COLLECTIONS.Genres;
        default:
            throw new StrapiError('Unhandle model');
    }
};
