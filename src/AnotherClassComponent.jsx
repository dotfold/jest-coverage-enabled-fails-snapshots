
import React from 'react'
import FunctionalComponent from './FunctionalComponent'

class AnotherClassComponent extends React.PureComponent {
  render () {
    return (
      <div>
        This is a Class Component that contains a FunctionalComponent
        <FunctionalComponent />
      </div>
    )
  }
}

export default AnotherClassComponent
