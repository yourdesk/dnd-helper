class SectionWrapper {
    constructor() {
        this.outer = document.createElement('section');
        this.inner = document.createElement('div');

        this.inner.classList.add('inner');

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

function elem(type) {
    return document.createElement(type);
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

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}