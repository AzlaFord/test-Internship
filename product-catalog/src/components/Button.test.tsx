import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders Button and handles click', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);
  const btn = screen.getByText(/click me/i);
  fireEvent.click(btn);
  expect(handleClick).toHaveBeenCalledTimes(1);
}); 