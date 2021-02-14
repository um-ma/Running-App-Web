import React from 'react'
import { screen, render, cleanup } from '@testing-library/react'
import Edit from './Edit'

describe('App component', () => {
  beforeAll(() => {
    render(<Edit />)
  })

  it('should have the right message in the dom', () => {
    const message = 'test'

    expect(screen.getByText(message)).toBeInTheDocument()
  })

  afterAll(cleanup)
})