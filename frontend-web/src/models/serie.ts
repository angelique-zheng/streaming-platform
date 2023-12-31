import { Cinematography } from '../utils/types';
import { Information } from './information';
import { People } from './person';
import { Seasons } from './season';

export type Serie = Information & {
    id: number;
    numberOfSeasons: number;
    directors: People;
    castings: People;
    genres: string[];
    seasons: Seasons;
};

export type Series = Array<Serie>;

export const isSerie = (param: Cinematography): param is Serie => {
    return (param as Serie).seasons !== undefined;
};
