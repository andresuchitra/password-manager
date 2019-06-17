import React, {useState, useEffect} from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import db from '../api/firestore.js'
import FormPassword from './FormPassword'
import swal from 'sweetalert2'

function useFetchPassword(id) {
    const [password, setPassword] = useState({});

    useEffect(() => {
        console.log('called again...');

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
        });
    }, [id])

    return [
        password
    ]

}

function UpdatePassword(props) {
    const [password] = useFetchPassword(props.match.params.id);

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

export default UpdatePassword