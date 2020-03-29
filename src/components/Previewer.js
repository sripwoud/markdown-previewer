import React from 'react'
import marked from 'marked'
const Previewer = props => {
  const getMarkdownText = () => {
    const rawMarkup = marked(props.content, { sanitize: true })
    return { __html: rawMarkup }
  }

  return (
    <div className='ui segment'>
      <h2 className='ui header'>Previewer</h2>
      <div className='ui container'>
        <div
          dangerouslySetInnerHTML={getMarkdownText()}
        />
      </div>
    </div>
  )
}

export default Previewer
