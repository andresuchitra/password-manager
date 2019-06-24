import React from 'react';
import { render, cleanup, waitForElement} from "@testing-library/react";
import "jest-dom/extend-expect";
import UpdatePassword from './UpdatePassword'
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

describe("Update Password Test", () => {
    it ("Update Password page (3 Input text components) being rendered", async () => {
        const {getByText,getByTestId } = render(<Router><UpdatePassword match={{params: {id: '0IceqZZ8DiVLayvgWgLr'}}} /></Router>);

        await waitForElement(() => {
            return getByText('Update Password', {exact: false})
        })

        expect(getByText('URL')).toBeInTheDocument();
        expect(getByText('Username')).toBeInTheDocument();
        expect(getByText('Password')).toBeInTheDocument();

        expect(getByTestId('form-save-btn')).toBeInTheDocument();
        expect(getByTestId('form-cancel-btn')).toBeInTheDocument();
    })

    it ("The 3 Input text components have some values", async () => {
        const {getByText,getByTestId } = render(<Router><UpdatePassword match={{params: {id: '0IceqZZ8DiVLayvgWgLr'}}} /></Router>);

        await waitForElement(() => {
            return getByText('Update Password', {exact: false})
        })

        //expect the data values of ID '0IceqZZ8DiVLayvgWgLr' to appear as well
        expect(getByTestId('form-control-url').value).toBe('detikdetikku.com')
        expect(getByTestId('form-control-username').value).toBe('testing-ubah-ubah')
        expect(getByTestId('form-control-password').value).toBe('asdf')

        expect(getByTestId('form-save-btn')).toBeInTheDocument();
        expect(getByTestId('form-cancel-btn')).toBeInTheDocument();
    })
    
})