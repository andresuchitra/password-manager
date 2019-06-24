import React from 'react';
import { render, cleanup, waitForElement, fireEvent, getByText, getAllByTestId} from "@testing-library/react";
import "jest-dom/extend-expect";
import PasswordList from './PasswordList'
import App from '../../App'
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';

afterEach(cleanup);

describe.only("Password List component test", () => {
    it ("Password table being rendered", async () => {
        const {getByTestId } = render(<Router><PasswordList /></Router>);
        
        await waitForElement(() => {
            return getByTestId('listPwd')
        })
        
        expect(getByTestId('listPwd')).toBeInTheDocument();
    })
    
    it("delete valid record", async () => {
        const { getByTestId, getByText } = render(<MemoryRouter initialEntries={['/add']}><App /></MemoryRouter>);
        const newData = {
            url: 'http://mockup.io',
            username: 'mockupuser',
            password: 'mockPass123@'
        }

        //Add mock up data first
        const submitButton = getByTestId('form-save-btn');
        const urlInput = getByTestId('form-control-url');
        const usernameInput = getByTestId('form-control-username');
        const passwordInput = getByTestId('form-control-password');

        fireEvent.change(urlInput, { target: { value: newData.url } })
        fireEvent.change(usernameInput, { target: { value: newData.username } })
        fireEvent.change(passwordInput, { target: { value: newData.password } })

        fireEvent.click(submitButton);
        
        // get reference to delete button of record created above, then fire delete
        await waitForElement(() => {
            return getByText(newData.username)
        });
        expect(getByText(newData.url)).toBeInTheDocument();
        
        const delBtnId = `del-btn-${newData.username}`;
        await waitForElement(() => {
            return getAllByTestId(delBtnId)
        });

        const deleteBtn = getAllByTestId(`del-btn-${newData.username}`)[0];
        fireEvent.click(deleteBtn);
        await waitForElement(() => {
            return getByTestId('listPwd');
        })
        
        expect(getByTestId(delBtnId)).not.toBeInTheDocument();
    })

    
})