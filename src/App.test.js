import { render, screen } from '@testing-library/react';
import App from './App';
import "react-day-picker/dist/style.css";


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
