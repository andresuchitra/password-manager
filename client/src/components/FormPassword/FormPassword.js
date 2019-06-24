import React, {useState, useEffect} from 'react'
import { Form, Row, Col, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FormPassword = React.memo(function FormPassword (props) {
    const [url, setURL] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    let initPwd = props.password ? props.password : {};

    //check useEffect
    useEffect(() => {
        if(initPwd.id) {
            console.log('init data');
            setURL(props.password.url)
            setUsername(props.password.username)
            setPassword(props.password.password)
        }
    }, [initPwd.id]);

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit({url, username, password})
    }

    return (
        <Form>
            <Form.Group as={Row} controlId="formPlaintextUrl">
                <Form.Label column sm={2}>
                    URL
                </Form.Label>
                <Col sm="10" lg="10" md="10">
                    <Form.Control data-testid="form-control-url" placeholder="Example 'http://example.com'" value={url} onChange={e => setURL(e.target.value)}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextUsername">
                <Form.Label column sm="2">
                    Username
                </Form.Label>
                <Col sm="10" lg="10" md="10">
                    <Form.Control data-testid="form-control-username" placeholder="Any text or any email format" value={username} onChange={e => setUsername(e.target.value)}  />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Password
                </Form.Label>
                <Col sm="10" lg="10" md="10">
                    <Form.Control data-testid="form-control-password" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}  />
                </Col>
            </Form.Group>
            <Form.Group as={Row} >
                <Form.Label column></Form.Label>
                <Col sm="10" lg="10" md="10">
                    <Button data-testid="form-save-btn" variant="primary" type="submit" style={{ minWidth: '100px'}} onClick={handleSubmit}>
                        Save
                    </Button>
                    <Link to={'/'} className="ml-2"><Button data-testid="form-cancel-btn" variant="danger">Cancel</Button></Link>
                </Col>
            </Form.Group>
        </Form>
);
});

export default React.memo(FormPassword)