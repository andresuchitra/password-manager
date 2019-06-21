import React from 'react';
import { render, cleanup, waitForElement, act } from "@testing-library/react";
import "jest-dom/extend-expect";
import Home from './Home'
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

describe("Test home page", () => {
    it ("Title Home Page 'React Password Manager' appears", async () => {
        const { getByTestId, getByText } = render(<Router><Home/></Router>);
    
        await waitForElement(() => {
            return getByTestId('home-title');
        })

        expect(getByTestId('home-title')).toBeInTheDocument();
        expect(getByText('React Password Manager')).toBeInTheDocument();
    })

    it ("A password list component created", async () => {
        const { getByTestId } = render(<Router><Home/></Router>);
        

        await waitForElement(() => {
            return getByTestId('listPwd')
          });
        expect(getByTestId('listPwd')).toBeInTheDocument();
    })
})