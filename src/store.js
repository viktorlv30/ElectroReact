/**
 * Created by viktor_local on 03.01.2017.
 */
import {createStore} from 'redux';
import reducer from './reducer';

export default function makeStore() {
    return createStore(reducer);
}