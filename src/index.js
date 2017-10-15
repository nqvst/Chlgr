import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { logger } from 'redux-logger'
import registerServiceWorker from "./registerServiceWorker";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

import createHistory from "history/createBrowserHistory";

import theme from './styles/Theme';

import { MuiThemeProvider } from 'material-ui/styles';

import firebase from "firebase";

var config = {
    apiKey: "AIzaSyAAdoKfcsGEs6l7M2TH0q3NhHDv4KtVjoc",
    authDomain: "chlgr-97821.firebaseapp.com",
    databaseURL: "https://chlgr-97821.firebaseio.com",
    projectId: "chlgr-97821",
    storageBucket: "chlgr-97821.appspot.com",
    messagingSenderId: "1068009099343"
};

firebase.initializeApp(config);

const history = createHistory();

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, logger));

const store = createStore(reducers, enhancer,);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App history={history}/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
