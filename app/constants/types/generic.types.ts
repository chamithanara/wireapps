export type SagaAction = {
    type: string;
    payload: object | string | number | boolean | undefined | { type: string; payload: object };
};

export type SyncFunction<T> = () => T;
