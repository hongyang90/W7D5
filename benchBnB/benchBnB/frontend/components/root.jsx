import React from 'react';
import App from './app';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';

const Root = (props) => {
    return (
        <div>
            <Provider store ={props.store} >
                <HashRouter>
                    <App />

                </HashRouter>

            </Provider>
        </div>
    )
}

export default Root;