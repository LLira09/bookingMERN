import DashboardNav from '../components/DashboardNav'
import ConnectNav from '../components/ConnectNav'
import { Link } from 'react-router-dom'

const DashboardSeller = () => {
  return (
    <>
      <div className='container-fluid bg-secondary p-5'>
        <ConnectNav />
      </div>
      <div className='container-fluid'>
        <DashboardNav />
      </div>
      <div className='container-fluid pt-3'>
        <div className='row'>
          <div className='col-md-10'>
            <h2>Your Rentals Homes</h2>
          </div>
          <div className='col-md-2'>
            <Link to='/homes/new' className='btn btn-primary'>
              + Add New
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardSeller
