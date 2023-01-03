import React from 'react'
import SampleAPI from 'react-traning-sample-api'

import PostCount from '../PostCount'
import PostListItem from '../PostListItem'

import './style.css'

const PostList = ({ setSelectedPost, selectedPost }) => {
  const [searchText, setSearchText] = React.useState('')
  const [posts, setPosts] = React.useState([])
  const [reverseOrder, setReverseOrder] = React.useState(false)

  React.useEffect(() => {
    SampleAPI.getPosts().then((postsFromAPI) => setPosts(postsFromAPI))

    // if you need data from server and no library provided
    /*fetch('http://www.someservice.com/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))*/
  }, [])

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchText.toLowerCase())
  )

  const orderedList = reverseOrder ? filteredPosts.reverse() : filteredPosts

  const onClickHandler = (post) => {
    setSelectedPost(
      selectedPost === null || post.id !== selectedPost.id ? post : null
    )
  }

  return (
    <div className="post-list">
      <input
        placeholder="Live search from results"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <button onClick={() => setReverseOrder(!reverseOrder)}>
        Switch ordering
      </button>
      {orderedList.map((post) => (
        <PostListItem
          key={post.id}
          title={post.title}
          selected={selectedPost?.id === post.id}
          onClick={() => onClickHandler(post)}
        />
      ))}
      <PostCount count={orderedList.length} />
    </div>
  )
}

export default PostList
