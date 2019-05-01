import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './store';
import {STORY_ARCHIVE} from "./constants/actionTypes";
import * as serviceWorker from './serviceWorker';
import {getReadableStories} from "./selectors/story";

// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// If you want your app to work offline and load faster, you can change

function render() {
    ReactDOM.render(<App stories={getReadableStories(store.getState())}
                         onArchive={(id) => store.dispatch({type: STORY_ARCHIVE, id})}/>
        , document.getElementById('root'));

}

store.subscribe(render);

render();

serviceWorker.unregister();
