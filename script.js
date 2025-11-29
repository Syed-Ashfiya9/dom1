// Select the <ul> using querySelector
const ul = document.querySelector("#item-list");

// Select the button
const button = document.querySelector("#add-btn");

// Add event listener for clicks
button.addEventListener("click", function () {
    // Create new li
    const newLi = document.createElement("li");

    // Calculate sequence number (length + 1)
    const count = ul.children.length + 1;
    newLi.textContent = Item ${count};

    // Apply conditional styling
    if (count % 2 !== 0) {
        // Odd numbered li → bold + blue
        newLi.style.fontWeight = "bold";
        newLi.style.color = "blue";
    } else {
        // Even numbered li → italic + red
        newLi.style.fontStyle = "italic";
        newLi.style.color = "red";
    }

    // Append new li to ul
    ul.appendChild(newLi);
});