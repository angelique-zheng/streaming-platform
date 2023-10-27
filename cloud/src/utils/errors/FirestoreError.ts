export class FirestoreError extends Error {
    override readonly name: string = 'FirestoreError';

    constructor(error: unknown) {
        const message = error instanceof Error ? error.message : JSON.stringify(error);
        super(message);
    }
}
