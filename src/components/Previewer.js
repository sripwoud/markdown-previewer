import React from 'react'

const Previewer = props => {
  return (
    <div className='ui segment'>
      <h2 className='ui header'>Previewer</h2>
      <div className='ui container'>
        {props.content}
      </div>
    </div>
  )
}

export default Previewer
