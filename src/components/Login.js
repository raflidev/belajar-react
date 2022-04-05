import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const navigator = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/login', {
        email: email,
        password: password
      });
      navigator('/dashboard')
    } catch (error) {
      if(error.response){
        setMsg(error.response.data.msg)
      }
    }
  }
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <form onSubmit={Auth} className="box">
                <p className="has-text-centered">{msg}</p>
                <div className="field">
                  <label className="label">Email or Username</label>
                  <div className="control">
                    <input type="text" name="" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="Username" id="" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input type="password" name="" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="***" id="" />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button className="button is-success is-fullwidth">Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login