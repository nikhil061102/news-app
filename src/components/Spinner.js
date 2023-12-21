import React, { Component } from 'react'
import loader from './spinner-icon.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loader} alt="" />
      </div>
    )
  }
}

export default Spinner
