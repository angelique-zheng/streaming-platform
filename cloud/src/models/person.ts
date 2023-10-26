import { DecoderFunction, array, record, string } from 'typescript-json-decoder';

export type Person = {
    firstname: string;
    lastname: string;
};

export const PersonDecoder: DecoderFunction<Person> = (value: unknown) => {
    return record({
        firstname: string,
        lastname: string
    })(value);
};

export type People = Array<Person>;

export const PeopleDecoder: DecoderFunction<People> = (value: unknown) => {
    return array(PersonDecoder)(value);
};
