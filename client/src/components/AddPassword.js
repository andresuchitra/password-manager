import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import db from '../api/firestore.js'
import FormPassword from './FormPassword'

function AddPassword(props) {
    function handleSubmit(data) {
        let docRef = db.collection("passwords").doc()
        
        docRef.set(data)
        .then(function(docRef) {
            console.log('added...');
            props.history.push("/")
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
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
                            <FormPassword onSubmit={handleSubmit}></FormPassword>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default AddPassword