import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
import firebase from 'firebase'
import 'firebase/auth'



const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const fireAuth = firebase.auth()

    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const authRes = await fireAuth.signInWithEmailAndPassword(email, pass)
            console.log('authres', authRes.user.uid)
            swal({
                title: "Welcome to you!",
                text: "We hope you have got some new collection here",
                icon: "success",
              });
            const payload ={
                uid :authRes.user.uid
            }

            localStorage.setItem('user',JSON.stringify(payload))
            navigate('/',{replace:true})
        } catch (error) {
            console.log('autherror', error.message)
            swal({
                text: error.message,
                icon: "error",
              });
        }
    }

    return (
        <div>
            <h1>login</h1>
            <button onClick={() => navigate('/signup')}>signup</button>
            <br />
            <input type="email"
                placeholder='Enter Your email'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />

            <br />

            <input type="text"
                placeholder='Enter Your password'
                value={pass}
                onChange={e => setPass(e.target.value)}

            />

            <br />

            <button onClick={handleLogin}>Login</button>

        </div>
    )
}

export default Login;
