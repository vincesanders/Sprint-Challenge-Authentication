import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils';

export default () => {
    const [jokes, setJokes] = useState([]);
    const getDadJokes = () => {
        axiosWithAuth().get('api/jokes/')
        .then(res => {
            console.log('This is res.dat in getDadJokes in DadJokes.js:\n', res.data, '\n');
            setJokes(res.data);
        }).catch(err => console.log(err));
    }
    useEffect(() => {
        getDadJokes();
    }, [])
    return (
        <div>
            <button onClick={getDadJokes}>Get Dad Jokes</button>
            {jokes.length > 0 ? 
            jokes.map(joke => <div key={joke.id} >{joke.joke}</div>) :
            <h2>Loading...</h2>}
        </div>
    );
}