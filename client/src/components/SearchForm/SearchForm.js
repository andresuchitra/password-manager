import React, {useState, useEffect} from 'react'
import {Button, Form, FormControl} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'

const SearchForm = function SearchForm(props) {
    const [searchKey, setSearchKey] = useState();
    let key = props.match.params.key;

    function handleSubmit(e, key) {
        e.preventDefault();
        
        props.history.push(`/search/${key}`)
    }

    useEffect(() => {
        setSearchKey(key)
    }, [key])

    return (
        <Form data-testid="search-form" inline className="mr-3" onSubmit={(e) => handleSubmit(e, searchKey)}>
            <FormControl type="text" placeholder="Search anything..." className="mr-sm-2" value={searchKey} onChange={ (e) => setSearchKey(e.target.value)}/>
            <Button variant="outline-success" data-testid="search-btn" type="submit">Search</Button>
        </Form>
    );
}

export default withRouter(SearchForm);