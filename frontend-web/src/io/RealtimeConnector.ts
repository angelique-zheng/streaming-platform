import { Firestore, Unsubscribe, collection, onSnapshot, query } from 'firebase/firestore';
import { firestore } from '../bootstrap';
import { CollectionPath, CollectionsTypes } from '../utils/collection';
import { ChangeEmitter, RealTimeListener } from './types';

export interface RealtimeConnectorSpec {
    subscribes<Path extends CollectionPath, T extends CollectionsTypes[Path]>(
        collectionPath: Path,
        onValuesCallback: RealTimeListener<ChangeEmitter<T>>
    ): Unsubscribe;
}

export class RealtimeConnector implements RealtimeConnectorSpec {
    constructor(private readonly database: Firestore = firestore) {}

    subscribes<Path extends CollectionPath, T extends CollectionsTypes[Path]>(
        collectionPath: Path,
        onValuesCallback: RealTimeListener<ChangeEmitter<T>>
    ): Unsubscribe {
        const queryRef = query(collection(this.database, collectionPath));
        return onSnapshot(
            queryRef,
            querySnapshot => {
                const changedData = querySnapshot.docChanges().map(change => {
                    return {
                        type: change.type,
                        data: change.doc.data() as T,
                        oldIndex: change.oldIndex,
                        newIndex: change.newIndex
                    };
                });
                onValuesCallback(changedData);
            },
            error => {
                onValuesCallback(error);
            }
        );
    }
}
