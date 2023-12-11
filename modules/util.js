export function elem(type) {
    return document.createElement(type);
}

export function rand(min, max) {
    if (max === undefined) {
        return Math.floor(Math.random() * min);
    }

    return Math.floor(Math.random() * (max - min + 1) + min);
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

export function generateID() {
    let temp = '';
    for (let i = 0; i < 10; i++) {
        temp += chars.charAt(rand(chars.length));
    }

    return temp;
}

export function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

export function textToData(text) {
    // TODO : load data from a file.
    // this also requires the position of each
    // block to be stored somewhere.
    // preferably, the position in the grid will 
    // be a part of the block itself, and each one
    // will be rendered in order, in its 
    // correct position
}

export function getPositionInGrid(index) {
    let nColumns = window.getComputedStyle(mainGrid).gridTemplateColumns.split(" ").length;

    return { 
        row: (Math.floor(index / nColumns)), 
        column: (index % nColumns)
    }
}

export function getElementIndex(elm) {
    let c = elm.parentNode.children,
        i = 0;
    for (; i < c.length; i++) if (c[i] == elm) return i;
}