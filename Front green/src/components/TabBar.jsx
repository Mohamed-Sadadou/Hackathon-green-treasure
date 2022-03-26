import React from 'react'
import { IoCubeOutline } from 'react-icons/io5'
import { BiBuildings } from 'react-icons/bi'
import { AiOutlineScan, AiOutlineReload, AiOutlineUser } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'

const TabBar = ({ page }) => {
  return (
    <div
      style={{
        borderRadius: '10px 10px 0px 0px',
        backgroundColor: '#FBFBFB',
        height: 68,
      }}
    >
      <AiOutlineScan
        style={{
          fontSize: 55,
          backgroundColor: 'black',
          color: 'white',
          padding: 5,
          marginLeft: '42%',
          zIndex: 101,
          bottom: 35,
          position: 'absolute',
          borderRadius: 10,
        }}
      />
      <footer>
        <toolbar>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-around',
            }}
          >
            {page === 'home' ? (
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <IoCubeOutline
                  style={{ fontSize: 35, margin: 8, marginBottom: 0 }}
                />
                <BsDot
                  style={{
                    fontSize: 30,
                    color: '#a6e702',
                    bottom: -7,
                    position: 'absolute',
                    fontWeight: 700,
                  }}
                />
              </div>
            ) : (
              <IoCubeOutline
                style={{ fontSize: 35, margin: 8, marginBottom: 10 }}
                onClick={() => {
                  window.location.href = '/'
                }}
              />
            )}

            {page === 'companies' ? (
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <BiBuildings
                  style={{ fontSize: 35, margin: 8, marginBottom: 0 }}
                />
                <BsDot
                  style={{
                    fontSize: 30,
                    color: '#a6e702',
                    bottom: -7,
                    position: 'absolute',
                    fontWeight: 700,
                  }}
                />
              </div>
            ) : (
              <BiBuildings
                style={{ fontSize: 35, margin: 8, marginBottom: 10 }}
                onClick={() => {
                  window.location.href = '/companies'
                }}
              />
            )}
            {page === 'history' ? (
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginLeft: 50,
                }}
              >
                <AiOutlineReload
                  style={{ fontSize: 35, margin: 8, marginBottom: 0 }}
                />
                <BsDot
                  style={{
                    fontSize: 30,
                    color: '#a6e702',
                    bottom: -7,
                    position: 'absolute',
                    fontWeight: 700,
                  }}
                />
              </div>
            ) : (
              <AiOutlineReload
                style={{
                  fontSize: 35,
                  margin: 8,
                  marginBottom: 10,
                  marginLeft: 50,
                }}
                onClick={() => {
                  window.location.href = '/history'
                }}
              />
            )}
            {page === 'account' ? (
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <AiOutlineUser
                  style={{ fontSize: 35, margin: 8, marginBottom: 0 }}
                />
                <BsDot
                  style={{
                    fontSize: 30,
                    color: '#a6e702',
                    bottom: -7,
                    position: 'absolute',
                    fontWeight: 700,
                  }}
                />
              </div>
            ) : (
              <AiOutlineUser
                style={{ fontSize: 35, margin: 8, marginBottom: 10 }}
                onClick={() => {
                  window.location.href = '/account'
                }}
              />
            )}
          </div>
        </toolbar>
      </footer>
    </div>
  )
}

export default TabBar
