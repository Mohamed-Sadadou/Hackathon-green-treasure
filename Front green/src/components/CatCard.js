import React from 'react'
import { MdStars } from 'react-icons/md'
const CatCard = ({ img, title, points }) => {
  return (
    <div
      style={{
        width: 108,
        height: 140,
        backgroundColor: 'white',
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 10,
      }}
    >
      <img src={img} style={{ height: '45%' }} alt="" />
      <p>{title}</p>
      <p
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <MdStars style={{ marginBottom: 5, color: '#FFC843' }} />
        {points}
      </p>
    </div>
  )
}

export default CatCard
