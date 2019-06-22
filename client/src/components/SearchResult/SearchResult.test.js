import React from 'react';
import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";
import SearchResult from './SearchResult'
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

describe("Search Result test", () => {
    it ("Search Result page being rendered", async () => {
        const {getByText } = render(<Router to="/search/done"><SearchResult /></Router>);

        
        expect(getByText('Search', {exact: false})).toBeInTheDocument();
    })
    
})