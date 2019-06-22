import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Card, Button} from 'react-bootstrap'
import db from '../../api/firestore'
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

function SearchResult(props) {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    let searchKey
    if(props.match) {
        searchKey = props.match.params.key;
    }
    else {
        searchKey = ''
    }
    useEffect(() => {
        setLoading(true);
        db.collection("passwords")
        .get()
        .then(function(querySnapshot) {
            let newList = []
            querySnapshot.forEach(function(doc) {
                let item = doc.data();
                
                if(item.url.includes(searchKey) || item.username.includes(searchKey) || item.password.includes(searchKey))
                {
                    newList.push({id: doc.id,...item})
                }
            });
            setList([...newList]);
        })
        .catch(function(error) {
            Swal.fire('Error', error.toString(), 'error')
        })
        .finally(function() {
            setLoading(false);
        })

    }, [searchKey]);
    
    if(loading) {
        return (
            <div className="mt-5">
                <LoadingSpinner></LoadingSpinner>
            </div>
        );
    }
    else {
        return (
            <Container className="py-3">
                <Row className="justify-content-lg-start mt-4">
                    <Col lg={8} md={10}>
                        <div className="d-flex align-items-center w-100">
                            <h3 className="mr-auto">Search: {props.match.params.key}</h3>
                            <Link to="/">Back to List</Link>
                        </div>
                        <div className="mt-3">
                                {list.map((pwd, index) =>
                                    <Card bg="light" className="w-100 px-2 mb-3 pwd-item">
                                        <Card.Body>
                                            <Row className="">
                                                <div className="d-flex flex-column align-items-stretch mr-3">
                                                    <div>URL</div>
                                                    <div>Username</div>
                                                    <div>Password</div>
                                                </div>
                                                <div className="d-flex flex-column align-items-start font-weight-bold mr-auto">
                                                    <div>{pwd.url}</div>
                                                    <div>{pwd.username}</div>
                                                    <div>{pwd.password}</div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <Link to={'/update/' + pwd.id}><Button variant="info">Update</Button></Link>
                                                </div>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                )}
                        </div> 
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SearchResult