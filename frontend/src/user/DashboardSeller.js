import DashboardNav from '../components/DashboardNav'
import ConnectNav from '../components/ConnectNav'

const DashboardSeller = () => {
  return (
    <>
      <div className='container-fluid bg-secondary p-5'>
        <ConnectNav />
      </div>
      <div className='container-fluid'>
        <DashboardNav />
      </div>
      <div className='container'>
        <p>Show all Hotels user have posted</p>
      </div>
    </>
  )
}

export default DashboardSeller
