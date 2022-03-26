import React from 'react'
import { RiShieldUserLine } from 'react-icons/ri'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { BsShieldCheck } from 'react-icons/bs'
const Signup = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [cPassword, setCPassword] = React.useState('')

  const signup = async (e) => {
    e.preventDefault()
    if (!email) {
      return
    }
    if (!password) {
      return
    }
    if (!cPassword) {
      return
    }
    if (cPassword !== password) {
      return
    }
    const signupData = {
      email,
      password,
      cPassword,
    }
    console.log(signupData)
  }
  return (
    <form
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
      onSubmit={signup}
    >
      <img src="/logo.png" alt="" style={{ width: '40%', marginTop: 30 }} />
      <p style={{ fontSize: 20, fontWeight: 600 }}>Create Your Account !</p>

      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <RiShieldUserLine
          style={{
            position: 'absolute',
            left: 41,
            fontSize: 22,
            marginTop: 41,
          }}
        />
        <input
          type="text"
          style={{
            width: '70%',
            borderWidth: 1,
            borderColor: '#B4B4B4',
            marginTop: 15,
            padding: '10px 10px 10px 43px',
            fontSize: 18,
            borderRadius: 10,
            height: 54,
          }}
          placeholder="Username"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <HiOutlineLockClosed
          style={{
            position: 'absolute',
            left: 41,
            fontSize: 22,
            marginTop: 41,
          }}
        />
        <input
          type="password"
          style={{
            width: '70%',
            borderWidth: '0.5px',
            borderColor: '#B4B4B4',
            marginTop: 15,
            padding: '10px 10px 10px 43px',
            fontSize: 18,
            borderRadius: 10,
            height: 54,
          }}
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <BsShieldCheck
          style={{
            position: 'absolute',
            left: 41,
            fontSize: 22,
            marginTop: 41,
          }}
        />
        <input
          type="password"
          style={{
            width: '70%',
            borderWidth: '0.5px',
            borderColor: '#B4B4B4',
            marginTop: 15,
            padding: '10px 10px 10px 43px',
            fontSize: 18,
            borderRadius: 10,
            height: 54,
          }}
          placeholder="Confirm Password"
          value={cPassword}
          onChange={(e) => {
            setCPassword(e.target.value)
          }}
        />
      </div>
      <button
        style={{
          width: 180,
          height: 65,
          backgroundColor: '#F2D80F',
          fontWeight: 700,
          fontSize: 20,
          color: 'white',
          borderRadius: 10,
          marginTop: 10,
        }}
        type="submit"
      >
        Sign Up
      </button>
      <p
        style={{
          fontSize: 12,
          fontWeight: 400,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 40,
        }}
      >
        You already have an account ?{' '}
        <p
          style={{ color: '#a6e702', fontWeight: 600, marginLeft: 7 }}
          onClick={() => {
            window.location.href = '/login'
          }}
        >
          {' '}
          Sign In
        </p>
      </p>
    </form>
  )
}

export default Signup
