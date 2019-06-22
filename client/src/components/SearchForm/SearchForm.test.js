import React from 'react';
import { render, cleanup, getByTestId } from "@testing-library/react";
import "jest-dom/extend-expect";
import SearchForm from './SearchForm'
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

describe("Search Form test", () => {
    it ("Search Form being rendered", async () => {
        const {getByTestId, getByPlaceholderText } = render(<Router><SearchForm /></Router>);
        
        expect(getByPlaceholderText(`Search anything...`)).toBeInTheDocument();
        expect(getByTestId(`search-btn`)).toBeInTheDocument();
    })
    
    it("Input search must be empty when loaded", () => {
        const {getByPlaceholderText } = render(<Router><SearchForm /></Router>);
        expect(getByPlaceholderText(`Search anything...`).value).toBe('');
    })
    
})