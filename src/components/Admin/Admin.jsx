import axios from "axios";
import { useState, useEffect } from "react";

function Admin(props) {

    const [userFeedback, setUserFeedback] = useState([]);

    useEffect(() => {
        previousFeedback();
      }, []);

    const previousFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then (response => {
            console.log(response.data);
            setUserFeedback(response.data);
        }).catch(error => {
            console.log('error during get on admin page', error);
        });
    }

    const handleDelete = (item) => {
        axios({
            method: 'DELETE',
            url: `/feedback/${item.id}`
        }).then(response => {
            console.log('response in handleDelete on admin page', response);
            previousFeedback();
        }).catch(error => {
            console.log('error in handleDelete on admin page', error);
        })
    }

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {userFeedback.map((item, id) => (
                        <tr key={id}>
                            <td>{item.feeling}</td>
                            <td>{item.understanding}</td>
                            <td>{item.support}</td>
                            <td>{item.comments}</td>
                            <button onClick={() => handleDelete(item)}>Delete</button>
                        </tr>
                    ))}
                </tbody>

            </table>
        </>
    )
}

export default Admin;