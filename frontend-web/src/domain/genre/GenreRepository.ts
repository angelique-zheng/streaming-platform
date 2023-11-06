import { RealtimeConnector } from '../../io/RealtimeConnector';
import { ChangeEmitter, RealTimeListener, RealTimeUnsubscribe } from '../../io/types';
import { Genre } from '../../models/genre';
import { COLLECTIONS } from '../../utils/collection';

export interface GenreRepositorySpec {
    watchGenres(callback: RealTimeListener<ChangeEmitter<Genre>>): RealTimeUnsubscribe;
}

export class GenreRepository implements GenreRepositorySpec {
    constructor(private readonly realtimeConnector = new RealtimeConnector()) {}

    watchGenres(callback: RealTimeListener<ChangeEmitter<Genre>>): RealTimeUnsubscribe {
        return this.realtimeConnector.subscribes(COLLECTIONS.Genres, callback);
    }
}
