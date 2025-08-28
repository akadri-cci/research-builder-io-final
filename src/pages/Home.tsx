import { Navigate } from 'react-router-dom'

const Home = () => {
  // Redirect to wallet page as the main landing page
  return <Navigate to="/wallet" replace />
}

export default Home
