import { SagaAction } from '@app/constants/types/generic.types';

export function* requestSaga(actions: SagaAction) {
    try {
        console.log("saga");
    } catch (error) {
        
    }
}
