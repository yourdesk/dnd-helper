let mainGrid = document.getElementById('main-grid');

let blocks = 'a b c d e f'.split(' ');

for (let i = 0; i < 10; i++) {
    let section = newBlock('test' + i);

    mainGrid.appendChild(section);
}

mainGrid.appendChild(newEmptyBlock());