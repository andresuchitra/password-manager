import React from 'react';
import App from '../../App'
import {BrowserRouter as Router} from 'react-router-dom'
import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("Render Header", () => {
    it ("Header with links Home and Password appear", () => {
        const { getByTestId, getByText } = render(<Router><App/></Router>);
  
        expect(getByTestId("header-root")).toBeDefined();
        expect(getByText("Home")).toBeDefined();
        expect(getByText('Add Password')).toBeDefined();
    })
})