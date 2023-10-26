import { DecoderFunction, record, string } from 'typescript-json-decoder';

const baseUrl = 'http://localhost:1337';

export type Media = {
    name: string;
    caption: string;
    ext: string;
    mime: string;
    url: string;
};

export const MediaDecoder: DecoderFunction<Media> = (value: unknown) => {
    return record({
        name: string,
        caption: string,
        ext: string,
        mime: string,
        url: decoderUrl
    })(value);
};

const decoderUrl: DecoderFunction<string> = (value: unknown) => {
    return baseUrl + string(value);
};
