import React, { useState, useEffect } from 'react'

const Editor = () => {
  const [content, setContent] = useState('')

  const handleChange = e => {
    setContent(e.target.value)
  }

  return (
    <div className='ui segment'>
      <h2 className='ui header'>Editor</h2>
      <form className='ui form'>
        <textarea
          placeholder='Type markdown'
          rows='10'
          onChange={handleChange}
          value={content}
        />
      </form>
    </div>
  )
}

export default Editor
