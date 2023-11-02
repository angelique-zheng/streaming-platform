import { Information } from './information';
import { Media } from './media';
import { People } from './person';

export type Movie = Information & {
    id: number;
    duration: number;
    directors: People;
    castings: People;
    genres: string[];
    video: Media;
};

export type Movies = Array<Movie>;
