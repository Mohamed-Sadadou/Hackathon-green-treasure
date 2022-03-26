import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CatCard from './CatCard'
import CatChip from './CatChip'

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 2.25,
  slidesToScroll: 1,
  arrows: false,
}
const AllP = () => {
  const cats = [
    { img: '/plastic.png', title: 'plastic', points: 250 },
    { img: '/metal.png', title: 'metal', points: 250 },
    { img: '/electronics.png', title: 'electronics', points: 250 },
    { img: '/glass.png', title: 'glass', points: 450 },
  ]
  const chips = [
    { img: './metal.png', title: 'Metal', points: 250 },
    { img: '/dddd.png', title: 'Cardboard', points: 250 },
    { img: '/electronics.png', title: 'Electronics', points: 250 },
  ]

  return (
    <div
      style={{
        width: '85%',
        marginLeft: 55,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p style={{ fontSize: 24, fontWeight: 700 }}>Popular</p>
        <div style={{ marginTop: 15 }}>
          <Slider {...settings}>
            {cats.map((c, index) => {
              return (
                <div>
                  <div key={index}>
                    <CatCard {...c} />
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p style={{ fontSize: 24, fontWeight: 700 }}>Other</p>
        <div>
          {chips.map((ch) => {
            return <CatChip {...ch} />
          })}
        </div>
      </div>
    </div>
  )
}

export default AllP
