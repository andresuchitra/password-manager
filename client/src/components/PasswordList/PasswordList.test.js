import React from 'react';
import { render, cleanup, waitForElement} from "@testing-library/react";
import "jest-dom/extend-expect";
import PasswordList from './PasswordList'
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

describe("Password List component test", () => {
    it ("Password table being rendered", async () => {
        const {getByTestId } = render(<Router><PasswordList /></Router>);

        await waitForElement(() => {
            return getByTestId('listPwd')
        })

        expect(getByTestId('listPwd')).toBeInTheDocument();
    })
    
})