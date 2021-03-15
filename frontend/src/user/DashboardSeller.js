import { useState } from 'react'
import DashboardNav from '../components/DashboardNav'
import ConnectNav from '../components/ConnectNav'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { HomeOutlined } from '@ant-design/icons'
import { createConnectAccount } from '../actions/stripe'
import { toast } from 'react-toastify'

const DashboardSeller = () => {
  const { auth } = useSelector(state => ({ ...state }))
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    try {
      let res = await createConnectAccount(auth.token)
      console.log(res)
    } catch (err) {
      console.log(err, 'button failed')
      toast.error('Stripe connection failed')
      setLoading(false)
    }
  }

  const connected = () => (
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
  )

  const notConnected = () => (
    <div className='container-fluid pt-3'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 text-center'>
          <div className='p-5-pointer'>
            <HomeOutlined className='h2' />
            <h4>Setup stripe for rentals</h4>
            <p>Transfer earnings to your bank account</p>
            <button
              disabled={loading}
              onClick={handleClick}
              className='btn btn-primary'
            >
              {loading ? 'Processing...' : 'Setup Payouts'}
            </button>
            <p className='text-muted'>
              <small>
                You will be redirected to stripe for onboarding process.
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <>
      <div className='container-fluid bg-secondary p-5'>
        <ConnectNav />
      </div>
      <div className='container-fluid'>
        <DashboardNav />
      </div>
      {auth &&
      auth.user &&
      auth.user.stripe_seller &&
      auth.user.stripe_seller.charges_enabled
        ? connected()
        : notConnected()}
    </>
  )
}

export default DashboardSeller
