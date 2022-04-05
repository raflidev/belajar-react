import React, {useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setconfPassword] = useState('');
  const [msg, setMsg] = useState('');

  const navigator = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      navigator('/');
    } catch (error) {
      if(error.response){
        setMsg(error.response.data.msg);
      }

    }
  }

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <form onSubmit={Register} className="box">
                <p className="has-text-centered">{msg}</p>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input type="text" name="" value={name} onChange={(e) => setName(e.target.value)} className="input" placeholder="Name" id="" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input type="email" name="" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="Email" id="" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input type="password" name="" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="*****" id="" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Confirm Password</label>
                  <div className="control">
                    <input type="password" name="" value={confPassword} onChange={(e) => setconfPassword(e.target.value)} className="input" placeholder="*****" id="" />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button className="button is-success is-fullwidth">Register</button>
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

export default Register