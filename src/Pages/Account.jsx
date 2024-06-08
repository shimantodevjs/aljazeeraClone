import React from 'react'
import SignUp from '../components/SignUp'
import WhatsNew from '../components/WhatsNew'

const Account = () => {
  return (
    <div className='grid lg:grid-cols-2 border-b-2 border-black'>
        <SignUp />
        <WhatsNew />
    </div>
  )
}

export default Account