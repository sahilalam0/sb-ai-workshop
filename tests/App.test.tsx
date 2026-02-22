import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('App', () => {
  it('renders the TodoApp inside the EDS Root provider', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /to-do app/i })).toBeInTheDocument()
  })
})
