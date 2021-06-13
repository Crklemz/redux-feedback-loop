import axios from "axios";
import { useState, useEffect } from "react";

function Admin() {

    //create variables for use state
    const [userFeedback, setUserFeedback] = useState([]);

    //runs previousFeedback on page load
    useEffect(() => {
        previousFeedback();
      }, []);

    //get request to pull data from DB 
    const previousFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then (response => {
            console.log(response.data);
            setUserFeedback(response.data);// sets the userFeedback variable to be the data received from the DB
        }).catch(error => {
            console.log('error during get on admin page', error);
        });
    }

    //delete request to remove individual feedback submissions based on id
    const handleDelete = (item) => {
        axios({
            method: 'DELETE',
            url: `/feedback/${item.id}`
        }).then(response => {
            console.log('response in handleDelete on admin page', response);
            previousFeedback();// runs previousFeedback to reprint the most current data in DB
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
                    {/* loop through the userFeedback array to print each submission on the page */}
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