import React from 'react';
import { render, cleanup, fireEvent, waitForElement} from "@testing-library/react";
import "jest-dom/extend-expect";
import AddPassword from './AddPassword'
import App from '../../App'
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';

afterEach(cleanup);

describe("Test Add Password", () => {
    it ("Add Password Form being rendered", async () => {
        const {getByText, getByPlaceholderText } = render(<Router><AddPassword/></Router>);
        
        expect(getByText('Add New Password')).toBeInTheDocument();
        expect(getByPlaceholderText(`Example 'http://example.com'`)).toBeInTheDocument();
        expect(getByPlaceholderText(`Any text or any email format`)).toBeInTheDocument();
        expect(getByPlaceholderText(`Password`)).toBeInTheDocument();
    })
    
    it("URL form must be empty when loaded", () => {
        const { getByPlaceholderText } = render(<Router><AddPassword/></Router>);
        expect(getByPlaceholderText(`Example 'http://example.com'`).value).toBe('');
    })
    
    it("Username form must be empty when loaded", () => {
        const { getByPlaceholderText } = render(<Router><AddPassword/></Router>);
        expect(getByPlaceholderText(`Any text or any email format`)).toBeInTheDocument();
    })
    
    it("Password form must be empty when loaded", () => {
        const { getByPlaceholderText } = render(<Router><AddPassword/></Router>);
        expect(getByPlaceholderText(`Password`)).toBeInTheDocument();
    })

    it('Clicking Cancel will return to Home Page', async () => {
        const { getByTestId, getByText } = render(<MemoryRouter initialEntries={['/add']}><App /></MemoryRouter>);
        
        const cancelLink = getByTestId('form-cancel-link');
        expect(cancelLink).toBeInTheDocument();
        fireEvent.click(getByText('Cancel'));
        expect(getByText('React Password Manager')).toBeInTheDocument();
        
    })
    
    it('Adding new password', async () => {
        const { getByTestId, getAllByText } = render(<MemoryRouter initialEntries={['/add']}><App /></MemoryRouter>);
        let newData = {
            url: 'http://testdata.io',
            username: 'user1',
            password: 'PaSS123!'
        }

        const submitButton = getByTestId('form-save-btn');
        const urlInput = getByTestId('form-control-url');
        const usernameInput = getByTestId('form-control-username');
        const passwordInput = getByTestId('form-control-password');

        fireEvent.change(urlInput, { target: { value: newData.url } })
        fireEvent.change(usernameInput, { target: { value: newData.username } })
        fireEvent.change(passwordInput, { target: { value: newData.password } })

        fireEvent.click(submitButton);

        await waitForElement(() => {
            return getAllByText(newData.url)
        })
        
        expect(getAllByText(newData.url)[0]).toBeInTheDocument();
    })

    it('Adding invalid new password data', async () => {
        const { getByTestId, getByText } = render(<MemoryRouter initialEntries={['/add']}><App /></MemoryRouter>);
        let newData = null;

        const submitButton = getByTestId('form-save-btn');
        fireEvent.click(submitButton);

        await waitForElement(() => {
            return getByText("Error Adding Document")
        })
        
        expect(getByText("Error Adding Document")).toBeInTheDocument();
    })
})