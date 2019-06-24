import React from 'react';
import { render, cleanup, waitForElement, fireEvent} from "@testing-library/react";
import "jest-dom/extend-expect";
import UpdatePassword from './UpdatePassword'
import App from '../../App'
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';

afterEach(cleanup);

describe.only("Update Password Test", () => {
    it ("Update Password page (3 Input text components) being rendered", async () => {
        const {getByText,getByTestId } = render(<Router><UpdatePassword match={{params: {id: '0IceqZZ8DiVLayvgWgLr'}}} /></Router>);

        await waitForElement(() => {
            return getByText('Update Password', {exact: false})
        })

        expect(getByText('URL')).toBeInTheDocument();
        expect(getByText('Username')).toBeInTheDocument();
        expect(getByText('Password')).toBeInTheDocument();

        expect(getByTestId('form-save-btn')).toBeInTheDocument();
        expect(getByTestId('form-cancel-link')).toBeInTheDocument();
    })

    it ("The 3 Input text components have some values", async () => {
        const {getByText,getByTestId } = render(<Router><UpdatePassword match={{params: {id: '0IceqZZ8DiVLayvgWgLr'}}} /></Router>);

        await waitForElement(() => {
            return getByText('Update Password', {exact: false})
        })

        //expect the data values of ID '0IceqZZ8DiVLayvgWgLr' to appear as well
        expect(getByTestId('form-control-url').value).toBe('detikdetikku.com')
        expect(getByTestId('form-control-username').value).toBe('origname')
        expect(getByTestId('form-control-password').value).toBe('asdf')

        expect(getByTestId('form-save-btn')).toBeInTheDocument();
        expect(getByTestId('form-cancel-link')).toBeInTheDocument();
    })

    it("Updating a valid record", async () => {
        const {getByText,getByTestId } = render(<MemoryRouter initialEntries={[`/update/0IceqZZ8DiVLayvgWgLr`]}><App /></MemoryRouter>);
        let updateData = {
            username: 'update-username'
        }

        await waitForElement(() => {
            return getByText('Update Password', {exact: false})
        })

        const urlInput = getByTestId('form-control-url');
        const usernameInput = getByTestId('form-control-username');
        const passwordInput = getByTestId('form-control-password');
        const submitButton = getByTestId('form-save-btn');

        //expect the data values of ID '0IceqZZ8DiVLayvgWgLr' to appear as well
        expect(urlInput.value).toBe('detikdetikku.com')
        expect(passwordInput.value).toBe('asdf')

        expect(getByTestId('form-save-btn')).toBeInTheDocument();
        expect(getByTestId('form-cancel-link')).toBeInTheDocument();

        //trigger username value update
        fireEvent.change(usernameInput, { target: { value: updateData.username } })

        fireEvent.click(submitButton);

        await waitForElement(() => {
            return getByText(updateData.username)
        })

        expect(getByText(updateData.username).innerHTML).toBe(updateData.username);
    })
    
    it("Updating inexistent record", async () => {
        const {getByText } = render(<MemoryRouter initialEntries={[`/update/11`]}><App /></MemoryRouter>);
        
        await waitForElement(() => {
            return getByText('Not found', {exact: false})
        })
        expect(getByText("No such document!")).toBeInTheDocument();
    })

    it("Updating empty param ID record", async () => {
        const {getByText } = render(<MemoryRouter initialEntries={[`/update`]}><App /></MemoryRouter>);
        
        await waitForElement(() => {
            return getByText('Not found', {exact: false})
        })
        expect(getByText("No such document!")).toBeInTheDocument();
    })
})