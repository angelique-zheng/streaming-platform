import { RealtimeConnector } from '../../io/RealtimeConnector';
import { ChangeEmitter, RealTimeListener, RealTimeUnsubscribe } from '../../io/types';
import { Serie } from '../../models/serie';
import { COLLECTIONS } from '../../utils/collection';

export interface SerieRepositorySpec {
    watchSeries(callback: RealTimeListener<ChangeEmitter<Serie>>): RealTimeUnsubscribe;
}

export class SerieRepository implements SerieRepositorySpec {
    constructor(private readonly realtimeConnector = new RealtimeConnector()) {}

    watchSeries(callback: RealTimeListener<ChangeEmitter<Serie>>): RealTimeUnsubscribe {
        return this.realtimeConnector.subscribes(COLLECTIONS.Series, callback);
    }
}
