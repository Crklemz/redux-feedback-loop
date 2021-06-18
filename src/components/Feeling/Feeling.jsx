import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function Feeling() {

    const history = useHistory('')
    const dispatch = useDispatch();


    const [userFeeling, setUserFeeling] = useState('');
   
    //on submit the feeling payload is sent to the feedback reducer, the clearField function is called, and history sends the user to the understanding page url

    const handleSubmit = (event) => {
        event.preventDefault();

        if (userFeeling === '' || userFeeling < 1 || userFeeling > 5) {
            alert('please enter a number to proceed');
        } else {

        console.log(`clicked submit in feeling component`)
        dispatch({type: 'ADD_FEEDBACK', payload: {
            feeling: Number(userFeeling)
        }})
        clearField();
        history.push('/understanding');
        }
    return;
    }

    const clearField = () => {
        setUserFeeling('');
    };

    return(
        <>

        <h1>
            How are you feeling today?
        </h1>
        <form onSubmit={handleSubmit}>

        <input 
          required
          type="number"
          min="0"
          max="5"
          value={userFeeling}
          onChange={(event) => setUserFeeling(Number(event.target.value))} 
        />

        <button type="submit">Next</button>

        </form>

        </>
    )
}

export default Feeling;