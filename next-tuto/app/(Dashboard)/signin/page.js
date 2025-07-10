"use client";
import { useState } from "react";
export default  function SignInPage() {

    const [throwError, setThrowError] = useState(true);
    if(throwError) {
        throw new Error("An error occurred while loading the sign-in page.");
    }
    const handlesetthrow = () => {
        setThrowError(true);
    };
    return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
            <h1>Sign In Page</h1>
            <p>Please enter your credentials to sign in.</p>
            <button onClick={handlesetthrow} style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}>
                Simulate Error
            </button>
        </div>
    );
}