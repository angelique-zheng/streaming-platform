export class StrapiError extends Error {
    override readonly name: string = 'StrapiError';

    constructor(error: unknown) {
        const message = error instanceof Error ? error.message : JSON.stringify(error);
        super(message);
    }
}
