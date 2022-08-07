import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the title of App component', () => {
  render(<App />);
  const h1 = screen.getByText(/Tour of France 2022./i);
  expect(h1).toBeInTheDocument();
});
