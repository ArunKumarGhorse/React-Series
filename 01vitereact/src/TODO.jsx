import react from 'react';
import reactDom from 'react-dom/client';
return function Todo() {
    const input = react.createElement("input", { type: "text", placeholder: "Enter your tasks", id: "input" });
    const array = react.createElement("ul", { id: "array" });
    const button = react.createElement("button", {
        onClick: () => {
            const task = document.getElementById("input").value;
            const li = react.createElement("li", null, task);
            document.getElementById("array").appendChild(li);
        }
    }, "Add Task");

    return (
        <>
            {input}
            {button}
            {array}
        </>
    )
}


