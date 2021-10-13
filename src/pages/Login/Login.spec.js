import React from 'react';
import {render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Login'



describe('Login Form', () => {
  it('should render email and password inputs in the page', () => {
    render(<Router>
      <Login/>
    </Router>)

    expect(screen.getByPlaceholderText('E-mail')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument()    
  })

  it('should render a button', () => {
    render(<Router>
      <Login/>
    </Router>)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})