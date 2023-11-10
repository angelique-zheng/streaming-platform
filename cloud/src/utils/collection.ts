import { StrapiModel } from '../payloads/StrapiPayload';

export const COLLECTIONS = {
    Movies: 'movies',
    Series: 'series',
    Genres: 'genres'
} as const;

export type CollectionsType = (typeof COLLECTIONS)[keyof typeof COLLECTIONS];

export const getCollectionNameFromModel = (model: StrapiModel): CollectionsType => {
    switch (model) {
        case 'movie':
            return COLLECTIONS.Movies;
        case 'serie':
            return COLLECTIONS.Series;
        case 'genre':
            return COLLECTIONS.Genres;
    }
};
