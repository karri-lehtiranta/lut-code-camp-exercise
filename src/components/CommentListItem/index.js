import './style.css'

const CommentListItem = ({ comment }) => {
  return (
    <div className="comment-list-comment">
      <div>
        <h5>{comment.name}</h5>
        <h5>{comment.email}</h5>
      </div>
      <p>{comment.body}</p>
    </div>
  )
}

export default CommentListItem
