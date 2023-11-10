import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { StrapiPayloadDecoder } from './payloads/StrapiPayload';
import { getCollectionNameFromModel } from './utils/collection';
import { DecoderError } from './utils/errors/DecoderError';
import { FirestoreError } from './utils/errors/FirestoreError';
import { StrapiError } from './utils/errors/StrapiError';
import { SwitchHelpers } from './utils/switchHelpers';

admin.initializeApp();

exports.strapiWebhook = functions.https.onRequest(async (request, response) => {
    try {
        const payload = StrapiPayloadDecoder(request.body);
        const collectionName = getCollectionNameFromModel(payload.model);

        console.log('Event type:', payload.event);

        switch (payload.event) {
            case 'entry.publish':
            case 'entry.update':
                await admin.firestore().collection(collectionName).doc(`${payload.entry.id}`).set(payload.entry);
                response.json({ result: `${payload.model} with ID: ${payload.entry.id} added/updated` });
                return;
            case 'entry.delete':
            case 'entry.unpublish':
                await admin.firestore().collection(collectionName).doc(`${payload.entry.id}`).delete();
                response.json({ result: `${payload.model} with ID: ${payload.entry.id} deleted` });
                return;
            case 'entry.create':
                console.warn('Creation event not handled');
                return;
            default:
                SwitchHelpers.throwSwitchError(payload.event);
        }
    } catch (error) {
        if (error instanceof DecoderError || error instanceof StrapiError) {
            throw error;
        }
        throw new FirestoreError(error);
    }
});
