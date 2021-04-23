import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

function configureStore(preloadedState) {
    const middleweres=[thunk];
    const middlewereEnhancers = composeWithDevTools(
        applyMiddleware(...middleweres)
    );

    const storeEnhancers=[middlewereEnhancers];
    const composeEnhacer=compose(...storeEnhancers);

    const stores = createStore(rootReducer, preloadedState, composeEnhacer);
    return stores;
}

export default configureStore();