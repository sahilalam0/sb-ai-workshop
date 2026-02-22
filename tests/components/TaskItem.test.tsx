import { render, screen } from '../helpers/render'
import TaskItem from '../../src/components/TaskItem'

describe('TaskItem', () => {
  it('renders the task text', () => {
    render(<TaskItem task={{ id: '1', text: 'Buy groceries' }} />)
    expect(screen.getByText('Buy groceries')).toBeInTheDocument()
  })
})
