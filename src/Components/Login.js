import React, {useState} from 'react'
import "./Login.css"
import SignInScreen from "./SignInScreen"

function Login() {

    const [SignIn, setSignIn] = useState(false);

    return (
        <div className='login'>
            <div className="login-screen">
               
                <h1 className='logo'>filmflex</h1>
                
                <button onClick={() => setSignIn(true)} className='signin-btn'>Sign in</button>

                <div className="login-gradient" />

                <div className="login-body">
                    {SignIn ? (
                        <SignInScreen />
                    ) : (
                        <>
                        <h1>
                            Unlimited Movies, Tv series and Documenrtries.
                        </h1>

                        <h2>
                            Anywhere, On any device. 
                        </h2>

                        <h3>
                            Watch now! Enter your email to join.
                        </h3>

                        <div className="login-input">
                            <form>
                                <input type="email" placeholder='Email Address' />
                                <button onClick={() => setSignIn(true)} >GET STARTED</button>
                            </form>
                        </div>
                    </>
                    )}
                    
                </div>
            </div>
        </div>
    )
}

export default Login
