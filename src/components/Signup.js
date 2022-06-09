import { useRef } from "react";


function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPassRef = useRef()


    return (
        <>
            <form action="">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" ref={emailRef} required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" ref={passwordRef} required />

                <label htmlFor="confirmPass">Confirm Password</label>
                <input type="password" id="confirmPass" ref={confirmPassRef} required />

                <button type="submit">Sign Up!</button>
            </form>
            <div className="question">
                Already have an account? Log in
            </div>
        </>

    );
}

export default Signup;
