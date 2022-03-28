import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

const form = { name: "John Doe", email: "johndoe@gmail.com", message: "I am your biggest fan!" };

afterEach(cleanup);

describe('Contact is rendering', () => {

    it('renders', () => {
      render(<Contact />);
    });
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Contact />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
  })  

  it('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('buttontag')).toHaveTextContent('Submit')
  })  