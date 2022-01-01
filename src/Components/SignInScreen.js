import React, { useRef } from 'react'
import { auth } from '../firebase';
import "./SignInScreen.css"

function SigninScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => {
            alert(error.message);
        });
    };

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => alert(error.message));
    };

    return (
        <div className='signin-screen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password"/>
                <button onClick={signIn} type="submit">Sign In</button>
                <h4>
                    <span className="signin-grey">New to filmflex? </span>
                    <span onClick={register} className="signin-link">Sign up now.</span>
                </h4>
                
            </form>
        </div>
    )
}

export default SigninScreen
