// AccordionItem.jsx
import React, { useState } from "react";

export default function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        className="flex justify-between items-center w-full p-4 text-left text-lg font-medium hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className="px-4 pb-4 text-gray-700">{content}</div>}
    </div>
  );
}
