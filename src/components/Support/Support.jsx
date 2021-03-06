import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function Support() {

    const history = useHistory('')
    const dispatch = useDispatch();


    const [userSupport, setUserSupport] = useState('');
   

    //on submit the support payload is sent to the feedback reducer, the clearField function is called, and history sends the user to the comment page url
    const handleSubmit = (event) => {
        event.preventDefault();

        if (userSupport === '' || userSupport < 1 || userSupport > 5) {
            alert('please enter a number to proceed');
        } else {

        console.log(`clicked submit in support component`)
        dispatch({type: 'ADD_FEEDBACK', payload: {
            support: Number(userSupport)
        }})
        clearField();
        history.push('/comment');
        }
    return;
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

        <input 
          required
          type="number"
          min="0"
          max="5"
          value={userSupport}
          onChange={(event) => setUserSupport(Number(event.target.value))} 
        />

        <button type="submit">Next</button>

        </form>

        </>
    )
}

export default Support;