import React from 'react'
import SampleAPI from 'react-traning-sample-api'

import CommentListItem from '../CommentListItem'

import './style.css'

const SinglePost = ({ selectedPost, setSelectedPost }) => {
  const [comments, setComments] = React.useState([])

  const getPostComments = React.useCallback(async () => {
    const commentsFromAPI = await SampleAPI.getCommentsForPost(selectedPost.id)
    setComments(commentsFromAPI)
  }, [selectedPost?.id])

  React.useEffect(() => {
    if (selectedPost !== null) {
      getPostComments(selectedPost.id)
    }
  }, [selectedPost, getPostComments])

  if (selectedPost === null) {
    return null
  }

  return (
    <div className="single-post">
      <div className="single-post-top">
        <h3>{selectedPost.title}</h3>
        <button onClick={() => setSelectedPost(null)}>X</button>
      </div>
      <p>Author: {selectedPost.userData.name}</p>
      <p>Text: {selectedPost.body}</p>
      <h4>Comments</h4>
      <div className="comment-container">
        {comments.map((comment) => (
          <CommentListItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  )
}

export default SinglePost
