import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './Landing_page/Home/Hero';

describe('Hero Component', () => {

  test('render hero image', () => {
    render(<Hero />);

    const heroImage = screen.getByAltText('heri img');

    expect(heroImage).toBeInTheDocument();

    expect(heroImage).toHaveAttribute(
      'src',
      'media/images/homeHero.png'
    );
  });

  test('render signup button', () => {
    render(<Hero />);

    const signupButton = screen.getByRole('button', {
      name: 'Sign up'
    });

    expect(signupButton).toBeInTheDocument();
  });

  

});