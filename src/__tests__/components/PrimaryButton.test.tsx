import React from 'react'
import { configure, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { PrimaryButton } from 'components'

configure({
  adapter: new Adapter()
})

it('PrimaryButton should render correctly', done => {
  expect.assertions(3)
  function callback () {
    try {
      expect(true).toBeTruthy()
      done()
    } catch (error) {
      done(error)
    }
  }

  const text = 'My Label'
  const wrapper = shallow(
    <PrimaryButton onClick={callback}>
      {text}
    </PrimaryButton>
  )
  const button = toJson(wrapper)
  expect(button).toMatchSnapshot()
  expect(wrapper.text()).toEqual(text)
  button.props.onClick()
})

