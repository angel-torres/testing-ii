import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, getByTitle } from 'react-testing-library';
import 'jest-dom/extend-expect';

import App from './App';

describe('<App/>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('strikes change when strike button is clicked', () => {
    const { getByTitle, getByText } = render(<App/>);
    const strikeButton = getByTitle(/strike/i);
  
    fireEvent.click(strikeButton);
    expect(getByText(/Strikes: 1/i)).toBeInTheDocument()
  })

  it('balls change when ball button is clicked', () => {
    const { getByTitle, getByText } = render(<App/>);
    const ballButton = getByTitle(/ball/i);
  
    fireEvent.click(ballButton);
    expect(getByText(/Balls: 1/i)).toBeInTheDocument()
  })

  it('fouls change when foul button is clicked', () => {
    const { getByTitle, getByText } = render(<App/>);
    const foulButton = getByTitle(/foul/i);
  
    fireEvent.click(foulButton);
    expect(getByText(/Fouls: 1/i)).toBeInTheDocument()
  })

})
