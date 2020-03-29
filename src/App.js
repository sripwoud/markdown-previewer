import React from 'react'

import Layout from './components/Layout'
import Previewer from './components/Previewer'
import Editor from './components/Editor'

const App = () => {
  return (
    <div>
      <Layout>
        <Editor />
        <Previewer />
      </Layout>
    </div>
  )
}

export default App
