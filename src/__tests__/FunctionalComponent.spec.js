
import React from 'react'
import renderer from 'react-test-renderer'

import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import FunctionalComponent from '../FunctionalComponent'

describe('<FunctionalComponent />', () => {
  it('should render correctly with react-test-renderer', () => {
    const wrapper = renderer.create(
      <FunctionalComponent />
    ).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('should render correctly with enzyme', () => {
    const wrapper = shallow(
      <FunctionalComponent />
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
