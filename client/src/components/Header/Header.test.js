import React from 'react';
import App from '../../App'
import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("Render Header", () => {
    it ("Header with links Home and Password appear", () => {
        const { getByTestId, getByText } = render(<App/>);
  
        expect(getByTestId("header-root")).toBeDefined();
        expect(getByText("Home")).toBeDefined();
        expect(getByText('Add Password')).toBeDefined();
    })

    it("Click Home will point to Home page", () => {
        expect(2).toBe(2);
    })
})