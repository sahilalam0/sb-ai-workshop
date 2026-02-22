import { render, screen } from '../helpers/render'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import TaskInput from '../../src/components/TaskInput'

describe('TaskInput', () => {
  it('renders the task input field with placeholder', () => {
    render(<TaskInput value="" onChange={vi.fn()} onAdd={vi.fn()} />)
    expect(screen.getByPlaceholderText('What needs to be done?')).toBeInTheDocument()
  })

  it('renders the "Add Task" button', () => {
    render(<TaskInput value="" onChange={vi.fn()} onAdd={vi.fn()} />)
    expect(screen.getByRole('button', { name: /add task/i })).toBeInTheDocument()
  })

  it('calls onChange when the user types in the input', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<TaskInput value="" onChange={handleChange} onAdd={vi.fn()} />)

    await user.type(screen.getByPlaceholderText('What needs to be done?'), 'A')

    expect(handleChange).toHaveBeenCalled()
  })

  it('calls onAdd when the "Add Task" button is clicked', async () => {
    const user = userEvent.setup()
    const handleAdd = vi.fn()
    render(<TaskInput value="Buy milk" onChange={vi.fn()} onAdd={handleAdd} />)

    await user.click(screen.getByRole('button', { name: /add task/i }))

    expect(handleAdd).toHaveBeenCalledTimes(1)
  })
})
