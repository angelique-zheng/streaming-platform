import { DateTime } from 'luxon';
import { DecoderFunction } from 'typescript-json-decoder';

export const decodeDateToTimestamp: DecoderFunction<number> = (value: unknown) => {
    const timestamp = DateTime.fromISO(value as string)
        .toJSDate()
        .getTime();
    if (isNaN(timestamp)) {
        throw new Error(`Failed to decode date value: ${value}`);
    }
    return timestamp;
};
