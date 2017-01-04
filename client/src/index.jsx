/**
 * Created by viktor_local on 04.01.2017.
 */
import React from 'react';
import ReactDom from 'react-dom';
import Voting from './components/Voting';
// import './style.css'

const pair = ['Trainspotting', '28 Days Later'];

ReactDom.render(
    <Voting pair={pair} winner='Trainspotting' />,
    document.getElementById('app')
);