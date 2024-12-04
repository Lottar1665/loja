import React from 'react'
import LoginForm from '../components/login'
import Image from 'next/image'

function page() {
  return (
    <div>
      <div className='text-center text-3xl font-bold'>
        <h1>3legant.</h1>
      </div>
      <div className=''>
        <Image
          src="/images/image1.png"
          alt=''
          width={375}
          height={430}
        />
      </div>
      <h1 className='text-3xl font-bold my-1 ml-5 '>Sign In</h1>
        <div>
          <LoginForm/>
        </div>
    </div>
  )
}

export default page