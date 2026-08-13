// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FluxPrime title', () => {
    render(<App />);
    const titleElement = screen.getByText(/FluxPrime/i);
    expect(titleElement).toBeInTheDocument();
});
