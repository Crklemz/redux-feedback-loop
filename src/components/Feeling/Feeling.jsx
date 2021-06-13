import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function Feeling() {

    const history = useHistory('')
    const dispatch = useDispatch();


    const [userFeeling, setUserFeeling] = useState('');
   

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(`clicked submit in feeling component`)
        dispatch({type: 'ADD_FEEDBACK', payload: {
            feeling: Number(userFeeling)
        }})
        clearField();
        history.push('/understanding');
    }

    const clearField = () => {
        setUserFeeling('');
    };

        console.log(userFeeling);

    return(
        <>

        <h1>
            How are you feeling today?
        </h1>
        <form onSubmit={handleSubmit}>

        <input onChange={(event) => setUserFeeling(event.target.value)} />

        <button type="submit">Next</button>

        </form>

        </>
    )
}

export default Feeling;