export type RealTimeListener<T> = (values: T[] | Error) => void;

export type RealTimeUnsubscribe = () => void;

export type ChangeEmitterType = 'added' | 'removed' | 'modified';

export type ChangeEmitter<T> = {
    type: ChangeEmitterType;
    data: T;
    oldIndex: number;
    newIndex: number;
};
