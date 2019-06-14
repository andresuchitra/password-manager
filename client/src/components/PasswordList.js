import React, {useState, useEffect} from 'react'
import {Table, Button} from 'react-bootstrap'
import PasswordItem from './PasswordItem'
import db from '../api/firestore'
import Moment from 'moment'

function useFetchPassword() {
    const [list, setList] = useState([]);
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)

        db.collection("passwords")
        .get()
        .then(function(querySnapshot) {
            let newList = []
            querySnapshot.forEach(function(doc) {
                let item = doc.data();
                item.createdat = doc.data().createdat.toDate();
                item.updatedat = doc.data().updatedat.toDate();

                console.log(item);
                newList.push({id: doc.id,...item})
            });

            setList([...newList])
        })
        .catch(function(error) {
            setError(error)
        })
        .finally(function() {
            setLoading(false)
        })

    }, [list.length]);

    return [list, loading, error]
}

function PasswordList() {
    const [list, loading, error] = useFetchPassword();

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>URL</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                    <th colSpan={2}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {list.map((pwd, index) => 
                    <tr>
                        <td>{(index + 1)}</td>
                        <td>{pwd.url}</td>
                        <td>{pwd.username}</td>
                        <td>{pwd.password}</td>
                        <td>{Moment(pwd.createdat.toString()).format('LLLL')}</td>
                        <td>{Moment(pwd.updatedat.toString()).format('LLLL')}</td>
                        <td><Button variant="info">Update</Button></td>
                        <td><Button variant="danger">Delete</Button></td>
                    </tr>
                )}
            </tbody>
        </Table>
    );
}

export default PasswordList