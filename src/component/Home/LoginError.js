import React from 'react'
import Link from '@mui/material/Link';

const LoginError = () => {
  return (
    <div className='position-fixed top-50 left-50'>
        <p>Authentication failed . please login to view</p>
        <Link href="/login" variant="body2">
                  Sign in
                </Link>
    </div>
  )
}

export default LoginError