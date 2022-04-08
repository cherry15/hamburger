import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom'
// import { renderWithRouter } from './test/test-utils'

test('app', () => {
  render(<App />, { wrapper: MemoryRouter })
  expect(screen.getByText(/home/i)).toBeInTheDocument()
})

// test('full app rendering/navigating', async () => {
//   const {user}: any = renderWithRouter(<App />)
//   expect(screen.getByText(/home/i)).toBeInTheDocument()
//   await user.click(screen.getByText(/about/i))
//   expect(screen.getByText(/about/i)).toBeInTheDocument()
// })
