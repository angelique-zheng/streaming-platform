import { RealtimeConnector } from '../../io/RealtimeConnector';
import { ChangeEmitter, RealTimeListener, RealTimeUnsubscribe } from '../../io/types';
import { Movie } from '../../models/movie';
import { COLLECTIONS } from '../../utils/collection';

export interface MovieRepositorySpec {
    watchMovies(callback: RealTimeListener<ChangeEmitter<Movie>>): RealTimeUnsubscribe;
}

export class MovieRepository implements MovieRepositorySpec {
    constructor(private readonly realtimeConnector = new RealtimeConnector()) {}

    watchMovies(callback: RealTimeListener<ChangeEmitter<Movie>>): RealTimeUnsubscribe {
        return this.realtimeConnector.subscribes(COLLECTIONS.Movies, callback);
    }
}
