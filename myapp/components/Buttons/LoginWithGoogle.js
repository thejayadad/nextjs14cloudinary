'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
import {FaGoogle} from 'react-icons/fa'

const LoginWithGoogle = () => {
  return (
    <button
    onClick={() => signIn('google')}
    className='py-2 px-4 rounded-md flex items-center'
    >
    <FaGoogle
    className='mr-2'
    />
    <span>SignIn With Google</span>
    </button>
  )
}

export default LoginWithGoogle