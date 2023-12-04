let mainGrid = document.getElementById('main-grid');

let blocks = 'a b c d e f'.split(' ');
let blockData = new BlockDataContainer();

for (let i = 0; i < 10; i++) {
    let dataTest = new SingleDataBlock('pluh ' + i);
    let section = dataTest.getElement();

    mainGrid.appendChild(section.outer);
    blockData.add(dataTest);
}

console.log(blockData.toJSON());

let loadButton = document.getElementById('load');
let saveButton = document.getElementById('save');
let showModalButton = document.getElementById('showModal');
let modalElement = document.getElementById('modal');
loadButton.onclick = () => {
    
}

saveButton.onclick = () => {
    console.log('saving data');
    download('data.json', JSON.stringify(blockData.toJSON()));
}

showModalButton.onclick = () => {
    if (modalElement.classList.contains('shown')) {
        modalElement.classList.remove('shown');
    } else {
        modalElement.classList.add('shown');
    }
}