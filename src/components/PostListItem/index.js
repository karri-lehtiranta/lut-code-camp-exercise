import React from 'react'

import './style.css'

const PostListItem = ({ title, onClick, selected }) => {
  return (
    <div
      className={`post-list-item ${selected ? 'active' : ''}`}
      onClick={onClick}
    >
      {title}
    </div>
  )
}

export default PostListItem
