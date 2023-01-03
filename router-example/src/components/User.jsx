import { useParams } from 'react-router-dom'

const User = () => {
  const { id } = useParams()

  return <p>The user id is: {id}</p>
}

export default User
