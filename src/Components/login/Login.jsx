import React from 'react'
import { useState } from 'react';
import firebase from '../../Firebase.js';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import loginin from './login.module.scss';
import { Link } from 'react-router-dom';
function Login() {
const [email,setemail]=useState('');
const [password,setpassword]=useState('');
const [showtype,setshowtype]=useState(false)
const [err,seterror]=useState('');
   async function handlLogin(e) {
        e.preventDefault();
        if (!email && !password && !confirnpassword) {
            seterror('Toliq toldiring')
            return
        }else(
            seterror('')
        )
       try {    
        const auth=getAuth();
        signInWithEmailAndPassword( auth,email, password)
       } catch (error) {
        if (error.code === 'auth/user-not-found') {
            seterror('User topilmadi')
        } else if (error.code === 'auth/wrong-password') {
            seterror('Parol xato')
        } else {
            seterror(error.message)
        }
       }
    }

const togglepassword=()=>{
    setshowtype(!showtype)
}
    


  return (
    <div>
        <div className={loginin.body}>
      <h1>Login</h1>
      <form className={loginin.form} onSubmit={handlLogin}>
      <div className={loginin.box_input}>
      <input className={loginin.input1} type='email' value={email} onChange={(e)=>setemail(e.target.value)} placeholder='email' />
       <input className={loginin.input1} type={showtype ? 'text' : 'password'} value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='password'/>
       {/* <button type='button' onClick={togglepassword}>sow pass</button> */}
      </div>
       <button className={loginin.btn} type='submit'>Login</button>
      </form>
      {err}
      </div>
    </div>
  )
}

export default Login


