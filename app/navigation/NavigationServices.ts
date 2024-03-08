import React from 'react';
import { CommonActions, NavigationContainerRef, StackActions } from '@react-navigation/native';

type params = {
    screen?: string;
    params?: any;
};

function navigate(routeName: string, params?: params) {
    navigationRef.current?.navigate(routeName, params);
}

function getCurrentRoute() {
    return navigationRef.current?.getCurrentRoute();
}

function goBack() {
    navigationRef.current?.goBack();
}

function pop(count: number, forceGoBack?: boolean) {
    navigationRef.current?.dispatch(StackActions.pop(count));
    if (forceGoBack) {
        navigationRef.current?.goBack();
    }
}

function fullReset(routeName: string) {
    navigationRef.current?.dispatch(
        CommonActions.reset({
            index: 1,
            routes: [{ name: routeName }]
        })
    );
}

function getRouterState() {
    return navigationRef.current?.getState();
}

function isReady() {
    return navigationRef.current?.isReady();
}

function setParams(params: { [x: string]: string | boolean }) {
    navigationRef.current?.setParams(params);
}

const navigationRef = React.createRef<NavigationContainerRef<any>>();
export default {
    navigationRef,
    pop,
    navigate,
    goBack,
    getCurrentRoute,
    fullReset,
    getRouterState,
    isReady,
    setParams
};
