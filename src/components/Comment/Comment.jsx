import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function Comment() {

    const history = useHistory('')
    const dispatch = useDispatch();


    const [userComment, setUserComment] = useState('');
   

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(`clicked submit in comment component`)
        dispatch({type: 'ADD_FEEDBACK', payload: {
            comment: userComment
        }})
        clearField();
        history.push('/review');
    }

    const clearField = () => {
        setUserComment('');
    };

        console.log(userComment);

    return(
        <>

        <h1>
            Any comments you would like to leave?
        </h1>
        <form onSubmit={handleSubmit}>

        <input onChange={(event) => setUserComment(event.target.value)} />

        <button type="submit">Next</button>

        </form>

        </>
    )
}

export default Comment;