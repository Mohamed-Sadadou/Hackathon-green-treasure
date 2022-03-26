import React from 'react'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { RiShieldUserLine } from 'react-icons/ri'
const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const login = async (e) => {
    e.preventDefault()
    if (!email) {
      return
    }
    if (!password) {
      return
    }
    const loginData = {
      email,
      password,
    }
    console.log(loginData)
  }
  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        justifyContent: 'space-around',
      }}
      onSubmit={login}
    >
      <img src="/logo.png" alt="" style={{ width: '40%', marginTop: 30 }} />
      <p style={{ fontSize: 20, fontWeight: 600 }}>Welcome !</p>
      <p
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: '#B4B4B4',
          margin: 0,
        }}
      >
        Please Enter Your Account Here
      </p>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <RiShieldUserLine
          style={{ position: 'absolute', left: 26, marginTop: 35 }}
        />
        <input
          type="text"
          style={{
            width: '80%',
            borderWidth: 1,
            borderColor: '#B4B4B4',
            marginTop: 15,
            padding: '10px 10px 10px 28px',
            fontSize: 18,
            borderRadius: 10,
            height: 35,
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
          width: '100%',
          marginRight: 42,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      >
        <HiOutlineLockClosed
          style={{ position: 'absolute', left: 26, marginTop: 33 }}
        />
        <input
          type="password"
          style={{
            width: '78.8%',
            borderWidth: '0.5px',
            borderColor: '#B4B4B4',
            marginTop: 15,
            padding: '10px 10px 10px 28px',
            fontSize: 18,
            borderRadius: 10,
            height: 35,
          }}
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <p style={{ fontSize: 11, fontWeight: 700, marginTop: 30 }}>
          Forget Password ?
        </p>
      </div>
      <button
        style={{
          width: 180,
          height: 65,
          backgroundColor: '#a6e702',
          fontWeight: 700,
          fontSize: 20,
          color: 'white',
          borderRadius: 10,
        }}
        type="submit"
      >
        Login
      </button>
      <p
        style={{
          fontSize: 12,
          fontWeight: 400,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        Don't have any account ?{' '}
        <p
          style={{ color: '#a6e702', fontWeight: 600, marginLeft: 7 }}
          onClick={() => {
            window.location.href = '/signup'
          }}
        >
          {' '}
          Sign Up
        </p>
      </p>
    </form>
  )
}

export default Login
