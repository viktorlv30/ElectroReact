/**
 * Created by viktor_local on 03.01.2017.
 */
import makeStore from './src/store';
import {startServer} from './src/server';

export const store = makeStore();

startServer(store);
console.info(`Server has started on port: `, 8090);

store.dispatch({
    type: 'SET_ENTRIES',
    entries: require('./entries.json')
});
store.dispatch({type: 'NEXT'});

