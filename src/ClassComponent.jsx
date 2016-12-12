
import React from 'react'
import FunctionalComponent from './FunctionalComponent'
import AnotherClassComponent from './AnotherClassComponent'

class ClassComponent extends React.PureComponent {
  render () {
    return (
      <div>
        This is a Class Component that contains a FunctionalComponent - this one fails the snapshot after enabling coverage
        <FunctionalComponent />
        And here is AnotherClassComponent - this one is ok in the snapshot
        <AnotherClassComponent />
      </div>
    )
  }
}

export default ClassComponent
