import React from 'react'

import SampleAPI from 'react-traning-sample-api'
import PostCount from './PostCount'
import PostListItem from './PostListItem'

const PostList = () => {
  const [searchText, setSearchText] = React.useState('')
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    SampleAPI.getPosts().then((postsFromAPI) => setPosts(postsFromAPI))
  }, [])

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <div>
      <input
        placeholder="Live search from results"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      {filteredPosts.map((post) => (
        <PostListItem key={post.id} title={post.title} />
      ))}
      <PostCount count={filteredPosts.length} />
    </div>
  )
}

export default PostList
