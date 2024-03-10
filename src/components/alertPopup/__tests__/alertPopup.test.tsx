import { Alert, Platform } from 'react-native';
import AlertPopupComponent from '../index';

describe('Testing AlertPopup Component', () => {
    let onOkActionPressMock: jest.Mock;
    let onCancelActionPressMock: jest.Mock;

    beforeAll(() => {
        onOkActionPressMock = jest.fn();
        onCancelActionPressMock = jest.fn();
    });

    describe('Rendering alert - ios', () => {
        beforeEach(() => {
            Platform.OS = 'ios';
        });

        test('Check text', () => {
            Platform.OS = 'ios';
            const mockedAlertPopup = jest.fn();
            jest.spyOn(Alert, 'alert').mockImplementation(mockedAlertPopup);

            AlertPopupComponent.showAlert({
                message: 'message',
                cancelLabel: 'cancel',
                okLabel: 'ok',
                title: 'title',
                onOkAction: onOkActionPressMock,
                onCancelAction: onCancelActionPressMock
            });

            expect(mockedAlertPopup).toHaveBeenCalledTimes(1);
        });
    });

    describe('Alert Tests', () => {
        test('check title with ok button', () => {
            const mockedPopup = jest.fn();
            jest.spyOn(AlertPopupComponent, 'showAlert').mockImplementation(mockedPopup);

            AlertPopupComponent.showAlert({
                message: 'message',
                okLabel: 'Ok',
                title: 'title',
                onOkAction: onOkActionPressMock
            });

            expect(mockedPopup).toHaveBeenCalledTimes(1);
            expect(mockedPopup).toMatchSnapshot();
        });

        test('check title with cancel button', () => {
            const mockedPopup = jest.fn();
            jest.spyOn(AlertPopupComponent, 'showAlert').mockImplementation(mockedPopup);

            AlertPopupComponent.showAlert({
                message: 'message',
                cancelLabel: 'cancel',
                title: 'title',
                onCancelAction: onCancelActionPressMock
            });

            expect(mockedPopup).toHaveBeenCalledTimes(1);
            expect(mockedPopup).toMatchSnapshot();
        });

        test('check title with two buttons', () => {
            const mockedPopup = jest.fn();
            jest.spyOn(AlertPopupComponent, 'showAlert').mockImplementation(mockedPopup);

            AlertPopupComponent.showAlert({
                message: 'message',
                cancelLabel: 'cancel',
                okLabel: 'Ok',
                title: 'title',
                onOkAction: onOkActionPressMock,
                onCancelAction: onCancelActionPressMock
            });

            expect(mockedPopup).toHaveBeenCalledTimes(1);
            expect(mockedPopup).toMatchSnapshot();
        });

        test('check outsideDismiss true', () => {
            const mockedPopup = jest.fn();
            jest.spyOn(AlertPopupComponent, 'showAlert').mockImplementation(mockedPopup);

            AlertPopupComponent.showAlert({
                message: 'message',
                cancelLabel: 'cancel',
                okLabel: 'Ok',
                title: 'title',
                outsideDismiss: true,
                onOkAction: onOkActionPressMock,
                onCancelAction: onCancelActionPressMock
            });

            expect(mockedPopup).toHaveBeenCalledTimes(1);
            expect(mockedPopup).toMatchSnapshot();
        });
    });
});
