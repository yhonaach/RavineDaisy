// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RavineDaisy title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RavineDaisy/i);
    expect(titleElement).toBeInTheDocument();
});
