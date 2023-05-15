import React from 'react';
import { useState } from 'react';
import firebase from '../../Firebase.js';
import registered from './register.module.scss';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {

const [email,setemail]=useState('');
const [password,setpassword]=useState('');
const [confirnpassword,setconfirnpassword]=useState('')
 
const [err,seterror]=useState('');

   async function handlsubmt(e) {
        e.preventDefault();
        if (!email && !password && !confirnpassword) {
            seterror('Toliq toldiring')
            return
        }
        if (password!==confirnpassword) {
            seterror('Passwordni birhil qilinf')
            return
        }
       try {
        const auth=getAuth();
       createUserWithEmailAndPassword( auth,  email, password)

       } catch (error) {
        seterror(error)
       }

    }
  return (
    <div>
      <div className={registered.body}>
      <h1>Register</h1>
      <form className={registered.form} onSubmit={handlsubmt}>
      <div className={registered.box_input}>
      <input className={registered.input1} type='email' value={email} onChange={(e)=>setemail(e.target.value)} placeholder='email' />
       <input className={registered.input1} type='password' value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='password' />
       <input className={registered.input1} type='password' value={confirnpassword} onChange={(e)=>setconfirnpassword(e.target.value)} placeholder='confirnpassword' />
      </div>
       <button className={registered.btn} type='submit'>Register</button>
      </form>
      {err}
      </div>
    </div>
  )
}

export default Register
