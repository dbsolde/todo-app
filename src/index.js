import React from 'react';
import { render } from 'react-dom';
import { createStore } from'redux'
import { Provider } from 'react-redux'
import App from './component/App';
import reducer from './reducer'
import registerServiceWorker from './registerServiceWorker';

// Working with redux devTools
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
    reducer,
    composeEnhancers,
)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();
