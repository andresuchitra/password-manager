import React from 'react';
import Home from '../../App'
import UpdatePassword from '../UpdatePassword/UpdatePassword';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("Loading Spinner", () => {
    
    it ("Testing Loading Home Page", () => {
        const { getByTestId } = render(<Router><Home/></Router>);
        expect(getByTestId("spinner")).toBeInTheDocument();
        
    })

    it ("Testing Loading UpdatePassword Page", () => {
        const { getByTestId } = render(<Router><UpdatePassword match={{params: {id: '0IceqZZ8DiVLayvgWgLr'}}}/></Router>);
        expect(getByTestId("spinner")).toBeInTheDocument();
        
    })
})