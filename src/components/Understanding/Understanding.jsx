import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function Understanding() {

    const history = useHistory('')
    const dispatch = useDispatch();


    const [userUnderstanding, setUserUnderstanding] = useState('');
   

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(`clicked submit in understanding component`)
        dispatch({type: 'ADD_FEEDBACK', payload: {
            understanding: Number(userUnderstanding)
        }})
        clearField();
        history.push('/support');
    }

    const clearField = () => {
        setUserUnderstanding('');
    };

        console.log(userUnderstanding);

    return(
        <>

        <h1>
            How well are you understanding the content?
        </h1>
        <form onSubmit={handleSubmit}>

        <input onChange={(event) => setUserUnderstanding(event.target.value)} />

        <button type="submit">Next</button>

        </form>

        </>
    )
}

export default Understanding;