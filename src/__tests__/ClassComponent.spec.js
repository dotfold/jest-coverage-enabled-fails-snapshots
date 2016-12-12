
import React from 'react'
import renderer from 'react-test-renderer'

import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import ClassComponent from '../ClassComponent'

describe('<ClassComponent />', () => {
  it('should render correctly with react-test-renderer', () => {
    const wrapper = renderer.create(
      <ClassComponent />
    ).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
  it('should render correctly with enzyme', () => {
    const wrapper = shallow(
      <ClassComponent />
    )
    console.log(wrapper.debug())
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
