import React, {useState, useEffect} from 'react'
import {Table, Button} from 'react-bootstrap'
import db from '../api/firestore'
import Moment from 'moment'
import {Link} from 'react-router-dom'


function handleDelete(e, id,list, setList) {
    db.collection('passwords').doc(id).delete();
    setList(list.filter(x => x.id !== id))
}

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

    return [list, loading, error, setList]
}

function PasswordList(props) {
    const [list, loading, error, setList] = useFetchPassword();

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
                    <tr key={index}>
                        <td>{(index + 1)}</td>
                        <td>{pwd.url}</td>
                        <td>{pwd.username}</td>
                        <td>{pwd.password}</td>
                        <td>{Moment(pwd.createdat.toString()).format('LLLL')}</td>
                        <td>{Moment(pwd.updatedat.toString()).format('LLLL')}</td>
                        <td>
                            <Link to={'/update/' + pwd.id}><Button variant="info">Update</Button></Link>
                        </td>
                        <td>
                            <Button variant="danger" onClick={ (e) => handleDelete(this, pwd.id, list, setList)  }>Delete</Button>
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>
    );
}

export default PasswordList