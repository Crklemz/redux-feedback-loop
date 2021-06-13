import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';




function Review() {

    const userReview = useSelector(store => store.feedback);

    const history = useHistory('');

    const dispatch = useDispatch();

    //on submit, the data collected thus far in the feedback reducer is sent to the DB via a post request.
    //data was packaged in such a way that it is able to be taken into the DB and an object
    //clearAllInputs is called on submit to clear the reducer for the next round of feedback being submitted
    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: userReview[0].feeling,
                understanding: userReview[1].understanding,
                support: userReview[2].support,
                comments: userReview[3].comment
            }

        })
            .then(response => {
                history.push('/');
                console.log('response in POST from review page submit -->', response)
                clearAllInputs();
            })
            .catch(error => {
                console.log('error in POST on review page -->', error);
            })
    }

    const clearAllInputs = () => {
        dispatch({
            type: 'REMOVE_FEEDBACK'
        });
    }
    

    console.log(userReview);

    return(
        <>
        <h1>Review your feedback</h1>

        <div>

                <div>
                <p>Feeling: {userReview[0].feeling}</p>
                <p>Understanding: {userReview[1].understanding}</p>
                <p>Support: {userReview[2].support}</p>
                <p>Comment: {userReview[3].comment}</p>
                </div>

        </div>
        
        <button onClick={handleSubmit}>Submit Feedback</button>
        </>
    )
}

export default Review;