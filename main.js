function createBlock(title) {
    let section = document.createElement("section");
    let mainGrid = document.getElementById("main-grid");

    let textElement = document.createElement("p");
    textElement.innerText = title;
    let input = document.createElement("input");
    input.type = "text";

    section.appendChild(textElement);
    section.appendChild(input);

    mainGrid.appendChild(section);
}

let blocks = "a b c d e e f".split(" ");

for (let block of blocks) {
    createBlock(blocks);
}