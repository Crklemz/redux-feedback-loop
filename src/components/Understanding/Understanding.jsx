import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function Understanding() {

    const history = useHistory('')
    const dispatch = useDispatch();


    const [userUnderstanding, setUserUnderstanding] = useState('');
   

    //on submit the understanding payload is sent to the feedback reducer, the clearField function is called, and history sends the user to the support page url
    const handleSubmit = (event) => {
        event.preventDefault();

        if (userUnderstanding === '' || userUnderstanding < 1 || userUnderstanding > 5) {
            alert('please enter a number to proceed');
        } else {

        console.log(`clicked submit in understanding component`)
        dispatch({type: 'ADD_FEEDBACK', payload: {
            understanding: Number(userUnderstanding)
        }})
        clearField();
        history.push('/support');
    }
    return;
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

        <input 
          required
          type="number"
          min="0"
          max="5"
          value={userUnderstanding}
          onChange={(event) => setUserUnderstanding(Number(event.target.value))} 
        />

        <button type="submit">Next</button>

        </form>

        </>
    )
}

export default Understanding;