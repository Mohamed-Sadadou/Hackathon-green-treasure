import React from 'react'
import { MdStars } from 'react-icons/md'

const CatChip = ({ img, title, points }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 3,
      }}
    >
      <div
        style={{
          width: 65,
          height: 65,
          padding: 10,
          backgroundColor: 'white',
          marginRight: 5,
          borderRadius: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={img} alt="" />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          maxWidth: '80%',
          height: 75,
        }}
      >
        <p style={{ margin: 0, fontSize: 19 }}>{title}</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <MdStars style={{ color: '#FFC843' }} />
          <p style={{ margin: '0px 5px' }}>{points}</p>
          coins
        </div>
      </div>
    </div>
  )
}

export default CatChip
