import React from 'react'

const PostCount = ({ count }) => {
  return (
    <p>
      {count} {count === 1 ? 'message' : 'messages'}
    </p>
  )
}

export default PostCount
