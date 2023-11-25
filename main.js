let mainGrid = document.getElementById("main-grid");

function newSection() {
    return document.createElement("section");
}

function elem(type) {
    return document.createElement(type);
}

function newBlock(title) {
    let section = newSection();

    let textElement = elem("p");
    textElement.innerText = title;
    let input = elem("input");
    input.type = "text";

    section.appendChild(textElement);
    section.appendChild(input);

    return section;
}

function newEmptyBlock() {
    let section = newSection();
    section.className = "empty";

    return section;
} 

let blocks = "a b c d e f".split(" ");

for (let block of blocks) {
    let section = newBlock(block);
    mainGrid.appendChild(section);
}
