"use client";

import { useEffect } from "react";

export default  function error({ error, reset }) {
    
    useEffect(() => {
        console.error("An error occurred:", error);
        // Optionally, you can log the error to an external service here
    }, [error]);
    return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1>Error Page</h1>
            <p>{ error.message }</p>
            <button
                onClick={() => reset()}
                style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}
            >
                Try Again
            </button>
        </div>
    );
}