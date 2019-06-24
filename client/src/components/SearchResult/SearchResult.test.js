import React from 'react';
import { render, cleanup, waitForElement} from "@testing-library/react";
import "jest-dom/extend-expect";
import SearchResult from './SearchResult'
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

describe("Search Result test", () => {
    it ("Search Result page being rendered", async () => {
        const {getByText } = render(<Router><SearchResult match={{params: {key: 'yaya'}}} /></Router>);

        await waitForElement(() => {
            return getByText('Search', {exact: false})
        })

        expect(getByText('Search', {exact: false})).toBeInTheDocument();
        //yaya is the search key. It should appear in the resul page
        expect(getByText('yaya', {exact: false})).toBeInTheDocument();
    })
    
})