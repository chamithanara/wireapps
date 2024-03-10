import { Alert } from 'react-native';
import { SyncFunction } from '@app/constants/types/generic.types';

export type AlertParams = {
    title?: string;
    message?: string;
    cancelLabel?: string;
    okLabel?: string;
    onOkAction?: SyncFunction<void>;
    onCancelAction?: SyncFunction<void>;
    onModalClose?: SyncFunction<void>;
    outsideDismiss?: boolean;
};

const AlertPopup = {
    showAlert: (alertParams: AlertParams): void => {
        const {
            title = '',
            message,
            okLabel,
            cancelLabel,
            onOkAction,
            onCancelAction,
            outsideDismiss = false
        } = alertParams;

        let alertButtons = [];

        const cancelButton = {
            text: cancelLabel,
            onPress: onCancelAction,
            style: 'cancel'
        };

        const okayButton = {
            text: okLabel,
            onPress: onOkAction
        };

        alertButtons = [
            ...(cancelLabel || onCancelAction ? [cancelButton] : []),
            ...(okLabel || onOkAction ? [okayButton] : [])
        ];

        Alert.alert(title, message, alertButtons, {
            cancelable: outsideDismiss
        });
    }
};

export default AlertPopup;
