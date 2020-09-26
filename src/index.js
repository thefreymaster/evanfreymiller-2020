import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as Context from "./Context";
import "react-awesome-button/dist/themes/theme-one.css";
import * as ScreenSizeContext from './services/ScreenSizeProvider';

ReactDOM.render(
    <ScreenSizeContext.Provider>
        <Context.Provider>
            <App />
        </Context.Provider>
    </ScreenSizeContext.Provider>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
