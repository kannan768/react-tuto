

export default async function LoginPage() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
            <h1>Login Page</h1>
            <p>Please enter your credentials to log in.</p>
            {/* Add your login form here */}
          
        </div>
    );
}