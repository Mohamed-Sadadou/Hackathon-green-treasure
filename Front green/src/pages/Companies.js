import React from 'react'
import TabBar from '../components/TabBar'

const Companies = () => {
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
      <TabBar page={'companies'} />
    </div>
  )
}

export default Companies
