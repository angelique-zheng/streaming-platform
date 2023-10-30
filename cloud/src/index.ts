import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { Genre, GenreDecoder } from './models/genre';
import { Movie, MovieDecoder } from './models/movie';
import { Serie, SerieDecoder } from './models/serie';
import { getCollectionNameFromModel } from './utils/collection';
import { DecoderError } from './utils/errors/DecoderError';
import { FirestoreError } from './utils/errors/FirestoreError';
import { StrapiError } from './utils/errors/StrapiError';

admin.initializeApp();

// FIXME: move types to another file
export type StrapiEvents = 'entry.create' | 'entry.update' | 'entry.delete' | 'entry.publish' | 'entry.unpublish';

export type StrapiPayload = {
    event: StrapiEvents;
    model: string;
    entry: unknown;
};

const decodeJson = (json: StrapiPayload): Movie | Serie | Genre => {
    switch (json.model) {
        case 'movie':
            return MovieDecoder(json.entry);
        case 'serie':
            return SerieDecoder(json.entry);
        case 'genre':
            return GenreDecoder(json.entry);
        default:
            throw new StrapiError(`Unhandled type: ${json}`);
    }
};

exports.strapiWebhook = functions.https.onRequest(async (request, response) => {
    if (
        typeof request.body !== 'object' ||
        request.body === null ||
        !('event' in request.body) ||
        !('model' in request.body)
    ) {
        throw new StrapiError('Request body does not match StrapiPayload type');
    }

    const payload: StrapiPayload = request.body;
    console.log('Event type:', payload.event);

    try {
        const data = decodeJson(payload);
        const collectionName = getCollectionNameFromModel(payload.model);
        switch (payload.event) {
            case 'entry.publish':
            case 'entry.update':
                await admin.firestore().collection(collectionName).doc(`${data.id}`).set(data);
                response.json({ result: `${payload.model} with ID: ${data.id} added/updated` });
                return;
            case 'entry.delete':
            case 'entry.unpublish':
                await admin.firestore().collection(collectionName).doc(`${data.id}`).delete();
                response.json({ result: `${payload.model} with ID: ${data.id} deleted` });
                return;
            default:
                throw new StrapiError('Unhandle event');
        }
    } catch (error) {
        if (error instanceof DecoderError || error instanceof StrapiError) {
            throw error;
        }
        throw new FirestoreError(error);
    }
});
