import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Review() {

    const userReview = useSelector(store => store.feedback)

    const history = useHistory('');

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
        </>
    )
}

export default Review;