import DashboardNav from '../components/DashboardNav'
import ConnectNav from '../components/ConnectNav'

const Dashboard = () => {
  return (
    <>
      <div className='container-fluid bg-secondary p-5'>
        <ConnectNav />
      </div>
      <div className='container-fluid'>
        <DashboardNav />
      </div>
      <div className='container'>
        <p>Show all bookings</p>
      </div>
    </>
  )
}

export default Dashboard
