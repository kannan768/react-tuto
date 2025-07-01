import { redirect } from "next/navigation";

export default function child() { 
    return (
        <div>
            <h1>Child Component</h1>
            {redirect("/Parent")}
            <p>This is the Child component. It will redirect to the Parent component.</p>
        </div>
    );
}