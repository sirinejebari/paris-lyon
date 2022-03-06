import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {dateOptions} from "./components/Header/Header";

test('Render App', () => {
  render(<App />);
  const today = (new Date()).toLocaleDateString('en-US', dateOptions)
  const headerDate = screen.getByText(today);
  const Intro = screen.getByText("Your ride details");
  const from = screen.getByText("Paris");
  const to = screen.getByText("Lyon");
  expect(headerDate).toBeInTheDocument();
  expect(Intro).toBeInTheDocument();
  expect(from).toBeInTheDocument();
  expect(to).toBeInTheDocument();
});
