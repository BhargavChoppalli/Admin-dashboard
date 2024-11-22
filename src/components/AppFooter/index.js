import { Typography } from 'antd'
import React from 'react'

function AppFooter() {
  return (
    <div className='AppFooter'>
      <Typography.Link href="Contact: +123456789"> +123456789</Typography.Link>
      <Typography.Link href="https://www.google.com" target={'blank'}>Privacy Policy</Typography.Link>
      <Typography.Link href="https://www.google.com" target={'blank'}>Terms of Use</Typography.Link>
    </div>
  )
}

export default AppFooter
