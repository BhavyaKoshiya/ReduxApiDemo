import React from 'react';
import MainStack from './navigations/MainStack';
import store from "./utils/store";
import { Provider } from "react-redux";
export default function Index() {

    return (
        <Provider store={store}>
            <MainStack />
        </Provider>
    );
}