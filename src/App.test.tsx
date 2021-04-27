import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';


test('App renders Header', () => {
    render(<App/>)
    const linkElement = screen.getByText(/IMAGE FINDER/i);
    expect(linkElement).toBeInTheDocument();
});
