import { useRef } from "react";
import { AuthProvider, useAuth } from "../context/AuthContext";

function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPassRef = useRef()
    const signup = useAuth()


    const handleSubmit = (e) => {
        e.preventDefault();
        if (passwordRef.current.value === confirmPassRef.current.value) {
            console.log("yaay")
        }
    }

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
