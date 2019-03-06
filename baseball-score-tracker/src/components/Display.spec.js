import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';
describe('<Display />', () => {
    it('Displays strikes', () => {
        const strikes = 0
        const { getByText } = render(<Display strikes={0}/>);

        expect(getByText(/strikes: 0/i)).toBeInTheDocument();
    })

    it('Displays balls', () => {
        const balls = 0
        const { getByText } = render(<Display balls={0}/>);

        expect(getByText(/balls: 0/i)).toBeInTheDocument();
    })

    it('Displays fouls', () => {
        const fouls = 0
        const { getByText } = render(<Display fouls={0}/>);

        expect(getByText(/fouls: 0/i)).toBeInTheDocument();
    })
    
    it('Displays strikes', () => {
        const strikes = 0
        const { getByText } = render(<Display strikes={0}/>);

        expect(getByText(/strikes: 0/i)).toBeInTheDocument();
    })
})
