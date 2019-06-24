import React from 'react';
import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";
import FormPassword from './FormPassword'
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

describe("Form Password Test", () => {
    it ("Password Form being rendered", async () => {
        const { getByTestId, getByText } = render(<Router><FormPassword/></Router>);

        expect(getByText('URL')).toBeInTheDocument();
        expect(getByText('Username')).toBeInTheDocument();
        expect(getByText('Password')).toBeInTheDocument();

        expect(getByTestId('form-save-btn')).toBeInTheDocument();
        expect(getByTestId('form-cancel-link')).toBeInTheDocument();

    })
})