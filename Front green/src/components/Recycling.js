import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import AllP from './AllP'

const Recycling = () => {
  const categories = [
    'Metal',
    'Plastic',
    'Glass',
    'Paper',
    'Cardboard',
    'Electronics',
  ]
  const [cat, setCat] = React.useState('All')
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2.3,
    slidesToScroll: 2,
    arrows: false,
  }

  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          marginLeft: 55,
          width: '85%',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <div
            style={
              cat === 'All'
                ? {
                    backgroundColor: '#A6E702',
                    padding: 8,
                    fontSize: 20,
                    color: '#524E4E',
                    margin: 2,
                    borderRadius: 10,
                    justifyContent: 'center',
                    display: 'flex',
                  }
                : {
                    backgroundColor: 'white',
                    padding: 8,
                    fontSize: 20,
                    color: '#524E4E',
                    margin: 2,
                    borderRadius: 10,
                    justifyContent: 'center',
                    display: 'flex',
                  }
            }
            onClick={() => setCat('All')}
          >
            All
          </div>
        </div>
        <div style={{ width: '95%' }}>
          <Slider {...settings}>
            {categories.map((c) => {
              return (
                <div>
                  <div
                    style={
                      cat === c
                        ? {
                            backgroundColor: '#A6E702',
                            padding: 8,
                            fontSize: 20,
                            color: '#524E4E',
                            margin: 5,
                            borderRadius: 10,
                            justifyContent: 'center',
                            display: 'flex',
                          }
                        : {
                            backgroundColor: 'white',
                            padding: 8,
                            fontSize: 20,
                            color: '#524E4E',
                            margin: 5,
                            borderRadius: 10,
                            justifyContent: 'center',
                            display: 'flex',
                          }
                    }
                    onClick={() => setCat(c)}
                  >
                    {c}
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
      {cat === 'All' ? <AllP /> : <></>}
    </div>
  )
}

export default Recycling
