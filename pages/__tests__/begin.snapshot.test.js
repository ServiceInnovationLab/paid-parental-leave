import * as React from 'react'
import Begin from '../begin'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(<Begin />)
  expect(tree).toMatchSnapshot()
})
