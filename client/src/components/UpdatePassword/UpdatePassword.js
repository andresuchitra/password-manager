import React, {useState, useEffect} from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import db from '../../api/firestore.js'
import FormPassword from '../FormPassword/FormPassword'
import swal from 'sweetalert2'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.js';

function useFetchPassword(id) {
    const [password, setPassword] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);

        let docRef = db.collection("passwords").doc(id);

        docRef.get()
        .then(function(updateDoc) {
            let data = updateDoc.data();
            if(data) {
                setPassword({id: updateDoc.id, ...data});
            }
            else {
                swal.fire('Not found', 'No such document!', 'error')
            }
        })
        .catch(function(error) {
            console.log(error);
            swal.fire('Not found', JSON.stringify(error), 'error')
        })
        .finally(function() {
            setLoading(false);
        })
    }, [id])

    return [
        password,
        loading,
        error
    ]

}

function UpdatePassword(props) {
    const [password, loading, error] = useFetchPassword(props.match.params.id);

    function handleSubmit(data) {
        let docRef = db.collection("passwords").doc(props.match.params.id)

        docRef.get()
        .then(function(updateDoc) {
            if(updateDoc.exists) {
                data.updatedat = new Date();
                docRef.update(data);
                swal.fire('Document updated','','success')
                props.history.push('/')
            }
            else {
                swal.fire('Not found', 'No such document!', 'error')
            }
        })
        .catch(function(error) {
            swal.fire('Not found', error, 'error')
        });
    }

    if(loading) {
        return (
            <div className="mt-5 w-100">
                <LoadingSpinner />
            </div>
        )
    }
    else {
        return (
            <Container className="py-3">
                <Row className="justify-content-center">
                    <Col sm={10} lg={5} md={8}>
                        <Row className="mb-4 text-center">
                            <Col>
                                <h1>Update Password</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormPassword password={password} onSubmit={handleSubmit}></FormPassword>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default UpdatePassword