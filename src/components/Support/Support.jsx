import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function Support() {

    const history = useHistory('')
    const dispatch = useDispatch();


    const [userSupport, setUserSupport] = useState('');
   

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(`clicked submit in support component`)
        dispatch({type: 'ADD_FEEDBACK', payload: {
            support: userSupport
        }})
        clearField();
        history.push('/comment');
    }

    const clearField = () => {
        setUserSupport('');
    };

        console.log(userSupport);

    return(
        <>

        <h1>
            How well are you being supported?
        </h1>
        <form onSubmit={handleSubmit}>

        <input onChange={(event) => setUserSupport(event.target.value)} />

        <button type="submit">Next</button>

        </form>

        </>
    )
}

export default Support;