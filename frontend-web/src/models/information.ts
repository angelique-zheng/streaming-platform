import { Media } from './media';

export type Information = {
    title: string;
    synopsis: string;
    releaseDate: number;
    poster: Media;
    rating?: number;
    company: string;
    trending: boolean;
    thumbnail: Media;
};
