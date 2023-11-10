import { DecoderFunction, array, record, string } from 'typescript-json-decoder';
import { DecoderError } from '../utils/errors/DecoderError';

export type Person = {
    firstname: string;
    lastname: string;
};

export const PersonDecoder: DecoderFunction<Person> = (value: unknown) => {
    try {
        return record({
            firstname: string,
            lastname: string
        })(value);
    } catch (error) {
        throw new DecoderError(error);
    }
};

export type People = Array<Person>;

export const PeopleDecoder: DecoderFunction<People> = (value: unknown) => {
    try {
        return array(PersonDecoder)(value);
    } catch (error) {
        if (error instanceof DecoderError) {
            throw error;
        }
        throw new DecoderError(error);
    }
};
