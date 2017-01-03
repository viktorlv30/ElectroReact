/**
 * Created by viktor_local on 03.01.2017.
 */
import makeStore from './src/store';
import startServer from './src/server';

export const store = makeStore();
startServer();