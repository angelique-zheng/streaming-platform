import { Media } from './media';

export type Episode = {
    title: string;
    description: string;
    episodeNumber: number;
    video: Media;
    image: Media;
};

export type Episodes = Array<Episode>;
