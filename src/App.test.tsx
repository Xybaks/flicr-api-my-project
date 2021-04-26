import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./state/reduxStore";

test('renders HEADER', () => {
    render(
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>);
    const linkElement = screen.getByText(/IMAGE FINDER/i);
    expect(linkElement).toBeInTheDocument();
});
