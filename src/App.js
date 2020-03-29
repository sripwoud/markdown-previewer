import React, { useState } from 'react'

import Layout from './components/Layout'
import Previewer from './components/Previewer'
import Editor from './components/Editor'

const App = () => {
  const [state, setState] = useState('')
  return (
    <div>
      <Layout>
        <Editor onChange={setState} />
        <Previewer content={state} />
      </Layout>
    </div>
  )
}

export default App
