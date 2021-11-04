const names = [];
const quotes = ["it's your turn! ", "let's go.", "Wake up!", "just do it!", "this time..."]
// const participants = document.querySelector("div");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

const addBtn = document.querySelector(".addBtn");
const pickBtn = document.querySelector(".pickBtn");
const resetBtn = document.querySelector(".resetBtn");

const addName = (e) => {
    e.preventDefault();
    h1.textContent = ""
    h2.textContent = ""
    const input = document.querySelector("input");
    const newName = input.value;
    if (input.value.length) {
        for (name of names) {
            if (name === newName) return
        }
        names.push(newName);
        // participants.textContent += " " + newName + " ";
        input.value = "";
    }
}

const pickName = (e) => {
    if (names.length) {
        e.preventDefault();
        h1.textContent = names[Math.floor(Math.random() * names.length)];
        h2.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    }
    else {
        h1.textContent = "What!?"
    }
}
const resetName = (e) => {
    e.preventDefault();
    names.length = 0;
    // participants.textContent = "";
    h1.textContent = ""
    h2.textContent = ""
}

addBtn.addEventListener("click", addName);
pickBtn.addEventListener("click", pickName);
resetBtn.addEventListener("click", resetName)