import { Genre } from '../models/genre';
import { Movie } from '../models/movie';
import { Serie } from '../models/serie';
import { ValueOf } from './types';

export const COLLECTIONS = {
    Movies: 'movies',
    Series: 'series',
    Genres: 'genres'
} as const;

export type CollectionPath = ValueOf<typeof COLLECTIONS>;

export type CollectionsTypes = {
    [COLLECTIONS.Movies]: Movie;
    [COLLECTIONS.Series]: Serie;
    [COLLECTIONS.Genres]: Genre;
};
