import axios from "axios";
import { useState, useEffect } from "react";

function Admin() {

    const [userFeedback, setUserFeedback] = useState([]);

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

    const handleDelete = () => {
        axios({
            method: 'DELETE',
            url: '/feedback'
        })
    }

    useEffect(() => {
        previousFeedback();
      }, []);

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
                    {userFeedback.map((item, i) => (
                        <tr key={i}>
                            <td>{item.feeling}</td>
                            <td>{item.understanding}</td>
                            <td>{item.support}</td>
                            <td>{item.comments}</td>
                            <button onClick={handleDelete}>Delete</button>
                        </tr>
                    ))}
                </tbody>

            </table>
        </>
    )
}

export default Admin;