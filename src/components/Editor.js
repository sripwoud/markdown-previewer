import React, { useState } from 'react'

import { ContextProvider } from '../Context'

const Editor = props => {
  const [state, setState] = useState('')
  const handleChange = e => {
    props.onChange(e.target.value)
    setState(e.target.value)
  }

  return (
    <ContextProvider>
      <div className='ui segment'>
        <h2 className='ui header'>Editor</h2>
        <form className='ui form'>
          <textarea
            placeholder='Type markdown'
            rows='10'
            onChange={handleChange}
            value={state}
          />
        </form>
      </div>
    </ContextProvider>
  )
}

export default Editor
