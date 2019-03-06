import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Display';

describe('<Dashboard/>', () => {
    it('Should display strike button', () => {
        const { getByText } = render(<Dashboard/>)

        expect(getByText(/strike/i)).toBeInTheDocument();
    })
    
    it('Should display ball button', () => {
        const { getByText } = render(<Dashboard/>)

        expect(getByText(/ball/i)).toBeInTheDocument();
    })
})