import { DateTime } from 'luxon';
import { DecoderFunction } from 'typescript-json-decoder';
import { DecoderError } from './errors/DecoderError';

export const decodeDateToTimestamp: DecoderFunction<number> = (value: unknown) => {
    const timestamp = DateTime.fromISO(value as string)
        .toJSDate()
        .getTime();
    if (isNaN(timestamp)) {
        throw new DecoderError(`Failed to decode date value: ${value}`);
    }
    return timestamp;
};

export const constant =
    <T>(constantValue: T): DecoderFunction<T> =>
    () =>
        constantValue;
