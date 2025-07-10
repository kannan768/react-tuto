export default async function header() { 
    await new Promise(resolve => setTimeout(resolve, 3000)); // Simulating a delay
    return (
        <header>
            <div style={{ textAlign: "center", padding: "1rem" }}>
                <h1>Complex Dashboard Header</h1>
            </div>
        </header>
    );
}