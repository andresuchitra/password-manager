import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import db from '../../api/firestore.js'
import FormPassword from '../FormPassword/FormPassword'
import swal from 'sweetalert2'

function AddPassword(props) {
    
    function handleSubmit(data) {
        if(Object.keys(data).length > 0) {
            let docRef = db.collection("passwords").doc()
            data.createdat = new Date();
            data.updatedat = data.createdat
            docRef.set(data)
            .then(function(docRef) {
                props.history.push("/")
                swal.fire('Password Added', '', 'success')
            })
            .catch(function(error) {
                swal.fire('Error Adding Document', 'Please check your data', 'error')
            });
        }
    }

    return (
        <Container className="py-3">
            <Row className="justify-content-center">
                <Col sm={10} lg={5} md={8}>
                    <Row className="mb-4 text-center">
                        <Col>
                            <h1>Add New Password</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormPassword data-testid="form-control-password" onSubmit={handleSubmit}></FormPassword>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default AddPassword