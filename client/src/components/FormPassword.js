import React, {useState} from 'react'
import { Form, Row, Col, Button} from 'react-bootstrap'

function FormPassword(props) {
    const [url, setURL] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        let createdat = new Date()
        let updatedat = createdat
        props.onSubmit({url, username, password, createdat, updatedat})
    }

    return (
        <Form>
            <Form.Group as={Row} controlId="formPlaintextUrl">
                <Form.Label column sm={2}>
                    URL
                </Form.Label>
                <Col sm="10" lg="10" md="10">
                    <Form.Control placeholder="Example 'http://example.com'" value={url} onChange={e => setURL(e.target.value)}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextUsername">
                <Form.Label column sm="2">
                    Username
                </Form.Label>
                <Col sm="10" lg="10" md="10">
                    <Form.Control placeholder="Any text or any email format" value={username} onChange={e => setUsername(e.target.value)}  />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Password
                </Form.Label>
                <Col sm="10" lg="10" md="10">
                    <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}  />
                </Col>
            </Form.Group>
            <Form.Group as={Row} >
                <Form.Label column></Form.Label>
                <Col sm="10" lg="10" md="10">
                    <Button variant="primary" type="submit" style={{ minWidth: '100px'}} onClick={handleSubmit}>
                        Save
                    </Button>
                </Col>
            </Form.Group>
        </Form>
);
}

export default FormPassword