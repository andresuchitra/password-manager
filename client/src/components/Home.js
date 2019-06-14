import React from 'react'
import { Container, Form, Row, Col} from 'react-bootstrap'
import PasswordList from './PasswordList'

function Home() {
    return (
        <Container className="py-3">
            <Row className="justify-content-lg-center">
                <Col>
                    <h3>React Password Manager</h3>
                    <Row className="mt-5">
                        <PasswordList></PasswordList>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Home