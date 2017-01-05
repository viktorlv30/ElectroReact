/**
 * Created by viktor_local on 04.01.2017.
 */
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './components/App';
import { VotingContainer } from './components/Voting';
import Results from './components/Results';
// import './style.css'

const store = createStore(reducer);
store.dispatch({
    type: 'SET_STATE',
    state: {
        vote: {
            pair: ['Sunshine', '28 Days Later'],
            tally: { Sunshine: 2 }
        }
    }
});

// const pair = ['Trainspotting', '28 Days Later'];

const routes = <Route component={ App }>
    <Route path="/" component={ VotingContainer } />
    <Route path="/results" components={ Results } />
</Route>;

ReactDom.render(
    <Provider store={ store }>
        <Router history={ hashHistory }>{ routes }</Router>
    </Provider>,
    document.getElementById('app')
);