import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import PasswordList from '../PasswordList/PasswordList'

function Home() { 
    return (
        <Container className="py-3">
            <Row className="justify-content-lg-center mt-3">
                <Col>
                    <h3 data-testid="home-title">React Password Manager</h3>
                    <div className="mt-5">
                        <PasswordList ></PasswordList>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Home