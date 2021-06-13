import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';




function Review() {

    const userReview = useSelector(store => store.feedback);

    const history = useHistory('');

    const dispatch = useDispatch();

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
            {userReview.map((review, i) => (
                <div key={i}>
                <p>{review.feeling}</p>
                <p>{review.understanding}</p>
                <p>{review.support}</p>
                <p>{review.comment}</p>
                </div>
            ))}
        </div>

        <button onClick={handleSubmit}>Submit Feedback</button>
        </>
    )
}

export default Review;