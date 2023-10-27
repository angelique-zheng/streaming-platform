import { DecoderFunction, array, number, record, string } from 'typescript-json-decoder';
import { Media, MediaDecoder } from './media';

export type Episode = {
    title: string;
    description: string;
    episodeNumber: number;
    video: Media;
    image: Media;
};

export const EpisodeDecoder: DecoderFunction<Episode> = (value: unknown) => {
    return record({
        title: string,
        description: string,
        episodeNumber: number,
        video: MediaDecoder,
        image: MediaDecoder
    })(value);
};

export type Episodes = Array<Episode>;

export const EpisodesDecoder: DecoderFunction<Episodes> = (value: unknown) => {
    return array(EpisodeDecoder)(value);
};
