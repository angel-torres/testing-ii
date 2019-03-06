import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';
import Display from './Display';

describe('<Dashboard/>', () => {
    it('Should display strike button', () => {
        const { getByText } = render(<Dashboard/>)

        expect(getByText(/strike/i)).toBeInTheDocument();
    })
    
    it('Should display ball button', () => {
        const { getByText } = render(<Dashboard/>)

        expect(getByText(/ball/i)).toBeInTheDocument();
    })

    it('Should display foul button', () => {
        const { getByText } = render(<Dashboard/>)

        expect(getByText(/foul/i)).toBeInTheDocument();
    })

    it('Should display hit button', () => {
        const { getByText } = render(<Dashboard/>)

        expect(getByText(/hit/i)).toBeInTheDocument();
    })
})