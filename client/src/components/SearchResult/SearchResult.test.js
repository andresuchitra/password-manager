import React from 'react';
import { render, cleanup, waitForElement, fireEvent, getByTestId} from "@testing-library/react";
import "jest-dom/extend-expect";
import App from '../../App'
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

    it ("Test searching feature", async () => {
        const { getByPlaceholderText, getAllByText, getByTestId } = render(<Router><App/></Router>);
        let searchkey = 'kopartemen';

        const searchInput =  getByPlaceholderText(`Search anything...`);
        const searchForm = getByTestId('search-form');
        expect(searchInput.value).toBe('');

        fireEvent.change(searchInput, {target: {value: searchkey}});
        fireEvent.submit(searchForm);

        await waitForElement(() => {
            return getAllByText('Search:', {exact: false});
        });

        expect(getAllByText(searchkey, {exact: false})[0]).toBeInTheDocument();

    })
    
})