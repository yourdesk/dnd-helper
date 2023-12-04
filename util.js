class SectionWrapper {
    constructor() {
        this.outer = document.createElement('section');
        this.inner = document.createElement('div');

        this.inner.classList.add("inner");

        this.outer.draggable = 'true';
        this.outer.ondragstart = handleDragStart;
        this.outer.ondragover = handleDragOver;
        this.outer.ondragenter = handleDragEnter;
        this.outer.ondragleave = handleDragLeave;
        this.outer.ondragend = handleDragEnd;
        this.outer.ondrop = handleDrop;

        this.outer.appendChild(this.inner);
    }
}

function newSection() {
    let section = document.createElement('section');
    
    let inner = document.createElement('div');



    return section;
}

function elem(type) {
    return document.createElement(type);
}

function newBlock(title) {
    let section = newSection();

    section.id = title;

    let textElement = elem('p');
    textElement.innerText = title;
    let input = elem('div');
    input.classList.add('input');
    input.contentEditable = 'true';

    section.appendChild(textElement);
    section.appendChild(input);

    return section;
}

function newEmptyBlock() {
    let section = newSection();
    section.className = 'empty';
    return section;
}

function rand(min, max) {
    if (max === undefined) {
        return Math.floor(Math.random() * min);
    }

    return Math.floor(Math.random() * (max - min + 1) + min);
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

function generateID() {
    let temp = '';
    for (let i = 0; i < 10; i++) {
        temp += chars.charAt(rand(chars.length));
    }

    return temp;
}

// const addEventListener_orig = HTMLElement.prototype.addEventListener;

// HTMLElement.prototype.addEventListener = (event, handler, bubbling) => {


//     addEventListener_orig.call(this, event, handler, bubbling);
// }