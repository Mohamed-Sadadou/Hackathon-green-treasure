import React from 'react'
import Recycling from '../components/Recycling'
import Rewards from '../components/Rewards'
import TabBar from '../components/TabBar'

const Home = () => {
  const [tab, setTab] = React.useState('Recycling')
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ width: '100%' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          {tab === 'Recycling' ? (
            <>
              <p style={{ fontSize: 24, fontWeight: 'bold' }}>Recycling</p>
              <p
                style={{ fontSize: 24, color: 'grey' }}
                onClick={() => setTab('Rewards')}
              >
                Rewards
              </p>
            </>
          ) : (
            <>
              <p
                style={{ fontSize: 24, color: 'grey' }}
                onClick={() => setTab('Recycling')}
              >
                Recycling
              </p>
              <p style={{ fontSize: 24, fontWeight: 'bold' }}>Rewards</p>
            </>
          )}
        </div>
        {tab === 'Recycling' ? <Recycling /> : <Rewards />}
      </div>
      <TabBar page={'home'} />
    </div>
  )
}

export default Home
