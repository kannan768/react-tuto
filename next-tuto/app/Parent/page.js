"use client";

import { useRouter } from "next/navigation";

export default function Parent() { 
    const router = useRouter();
    const handleclick = () => {
      console.log("Button clicked! Navigating to Child component.");
      router.push("/Child");
    };
    return (
        <div>
            <h1>Parent Component</h1>
            <button className="p-2 text-white bg-blue-500 rounded" onClick={handleclick}>
                Go to Child
            </button>
        </div>
    );
}