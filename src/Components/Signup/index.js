import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'


 

const Signup = () => {
    const [nam, setNam] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const fireAuth = firebase.auth()
    const fireStore = firebase.firestore()

    const navigate = useNavigate()

    const saveUserData = async (uid) => {

        const payload = {
            name: nam,
            email,
            pass,
        }
        try {
            await fireStore
            .collection('React_users')
            .doc(uid)
            .set(payload)
            console.log('running...')
            navigate('/login')
            console.log('chal gya')
        } catch (error) {
            console.log('error firestore',error.message)
            swal({
                // title: "Welcome to you!",
                text: error.message,
                icon: "warning",
            });
            setEmail('');
            setPass('');
            setNam('');
        }

    }



    const handleSignup = async () => {
        try {
            const authRes = await fireAuth
            .createUserWithEmailAndPassword(email, pass)
            console.log('authres', authRes.user.uid)
            saveUserData(authRes.user.uid)
        } catch (error) {
            console.log('autherror', error.message)
            swal({
                // title: "Welcome to you!",
                text: error.message,
                icon: "warning",
            });
            setEmail('');
            setPass('');
            setNam('');
        }
    }

    return (
        <div>
            <h1>signup</h1>
            <button onClick={() => navigate('/login')}>login</button>
            <br />
            <input type="text"
                placeholder='Enter Your Name'
                value={nam}
                onChange={e => setNam(e.target.value)}
            />

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

            <button onClick={handleSignup}>Signup</button>

        </div>
    )
}

export default Signup;
