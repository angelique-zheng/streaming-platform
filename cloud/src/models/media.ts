import { DecoderFunction, record, string } from 'typescript-json-decoder';
import { DecoderError } from '../utils/errors/DecoderError';

const baseUrl = 'http://localhost:1337';

export type Media = {
    name: string;
    caption: string;
    ext: string;
    mime: string;
    url: string;
};

export const MediaDecoder: DecoderFunction<Media> = (value: unknown) => {
    try {
        return record({
            name: string,
            caption: string,
            ext: string,
            mime: string,
            url: decoderUrl
        })(value);
    } catch (error) {
        if (error instanceof DecoderError) {
            throw error;
        }
        throw new DecoderError(error);
    }
};

const decoderUrl: DecoderFunction<string> = (value: unknown) => {
    try {
        return baseUrl + string(value);
    } catch (error) {
        throw new DecoderError(error);
    }
};
