import { useSelector } from 'react-redux'
const Home = () => {
  const { user } = useSelector(state => state)
  return <div className='container-fluid h1 p-5 text-center'>home page</div>
}

export default Home
