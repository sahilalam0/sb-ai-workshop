import { render, screen } from '../helpers/render'
import userEvent from '@testing-library/user-event'
import TodoApp from '../../src/components/TodoApp'

describe('TodoApp', () => {
  // --- Rendering ---

  it('renders the "To-Do App" heading', () => {
    render(<TodoApp />)
    expect(screen.getByRole('heading', { name: /to-do app/i })).toBeInTheDocument()
  })

  it('renders the task input field with placeholder', () => {
    render(<TodoApp />)
    expect(screen.getByPlaceholderText('What needs to be done?')).toBeInTheDocument()
  })

  it('renders the "Add Task" button', () => {
    render(<TodoApp />)
    expect(screen.getByRole('button', { name: /add task/i })).toBeInTheDocument()
  })

  it('shows empty state message when there are no tasks', () => {
    render(<TodoApp />)
    expect(screen.getByText(/no tasks yet/i)).toBeInTheDocument()
  })

  // --- Adding tasks ---

  it('adds a task when user types text and clicks "Add Task"', async () => {
    const user = userEvent.setup()
    render(<TodoApp />)

    await user.type(screen.getByPlaceholderText('What needs to be done?'), 'Buy groceries')
    await user.click(screen.getByRole('button', { name: /add task/i }))

    expect(screen.getByText('Buy groceries')).toBeInTheDocument()
    expect(screen.queryByText(/no tasks yet/i)).not.toBeInTheDocument()
  })

  it('clears the input after adding a task', async () => {
    const user = userEvent.setup()
    render(<TodoApp />)

    const input = screen.getByPlaceholderText('What needs to be done?')
    await user.type(input, 'Buy groceries')
    await user.click(screen.getByRole('button', { name: /add task/i }))

    expect(input).toHaveValue('')
  })

  // --- Edge cases ---

  it('does not add a task when input is empty', async () => {
    const user = userEvent.setup()
    render(<TodoApp />)

    await user.click(screen.getByRole('button', { name: /add task/i }))

    expect(screen.getByText(/no tasks yet/i)).toBeInTheDocument()
  })

  it('does not add a task when input contains only whitespace', async () => {
    const user = userEvent.setup()
    render(<TodoApp />)

    await user.type(screen.getByPlaceholderText('What needs to be done?'), '   ')
    await user.click(screen.getByRole('button', { name: /add task/i }))

    expect(screen.getByText(/no tasks yet/i)).toBeInTheDocument()
  })

  // --- Multiple tasks ---

  it('adds multiple tasks in reverse chronological order (newest first)', async () => {
    const user = userEvent.setup()
    render(<TodoApp />)

    const input = screen.getByPlaceholderText('What needs to be done?')
    const addButton = screen.getByRole('button', { name: /add task/i })

    await user.type(input, 'First task')
    await user.click(addButton)
    await user.type(input, 'Second task')
    await user.click(addButton)

    const items = screen.getAllByText(/task/i)
    const taskItems = items.filter((el) =>
      el.textContent === 'First task' || el.textContent === 'Second task',
    )
    expect(taskItems[0]).toHaveTextContent('Second task')
    expect(taskItems[1]).toHaveTextContent('First task')
  })

  it('removes empty state after the first task is added', async () => {
    const user = userEvent.setup()
    render(<TodoApp />)

    expect(screen.getByText(/no tasks yet/i)).toBeInTheDocument()

    await user.type(screen.getByPlaceholderText('What needs to be done?'), 'A task')
    await user.click(screen.getByRole('button', { name: /add task/i }))

    expect(screen.queryByText(/no tasks yet/i)).not.toBeInTheDocument()
  })
})
