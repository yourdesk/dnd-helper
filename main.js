let mainGrid = document.getElementById('main-grid');

let blocks = 'a b c d e f'.split(' ');
let blockData = new BlockDataContainer();

for (let i = 0; i < 10; i++) {
    let dataTest = new SingleDataBlock('pluh ' + i); 
    let section = dataTest.getElement();

    mainGrid.appendChild(section);
    blockData.add(dataTest);
}

mainGrid.appendChild(newEmptyBlock());

console.log(blockData.toJSON());