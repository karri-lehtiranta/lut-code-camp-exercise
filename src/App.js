import React from 'react'

import PostList from './components/PostList'
import SinglePost from './components/SinglePost'

import './App.css'

function App() {
  const [selectedPost, setSelectedPost] = React.useState(null)
  return (
    <div className="App">
      <PostList selectedPost={selectedPost} setSelectedPost={setSelectedPost} />
      <SinglePost
        selectedPost={selectedPost}
        setSelectedPost={setSelectedPost}
      />
    </div>
  )
}

export default App
