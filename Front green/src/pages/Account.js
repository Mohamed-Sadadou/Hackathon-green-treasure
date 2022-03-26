import React from 'react'
import TabBar from '../components/TabBar'

const Account = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <h1>Hello World</h1>
      <TabBar page={'account'} />
    </div>
  )
}

export default Account
