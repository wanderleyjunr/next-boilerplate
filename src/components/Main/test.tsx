import { render, screen } from '@testing-library/react'

import Main from './'

describe('<Main />', () => {
  it('should render the headind', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })
})
