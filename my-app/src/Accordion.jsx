// Accordion.jsx
import React from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion() {
  const items = [
    {
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces.",
    },
    {
      title: "What is Tailwind?",
      content:
        "Tailwind is a utility-first CSS framework for rapidly building custom designs.",
    },
    {
      title: "Why use an Accordion?",
      content: "To organize content into expandable/collapsible sections.",
    },
  ];

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </div>
  );
}
