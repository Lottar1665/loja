import React from 'react'
import RegisterForm from '../components/registerforms'
import Image from 'next/image'

function singup() {
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
      <h1 className='text-3xl font-bold my-1 ml-5 '>Sign up</h1>
        <div>
          <RegisterForm/>
        </div>
    </div>
  )
}

export default singup