import { SingleDataBlock } from './modules/blocks/SingleDataBlock.js';
import { download } from './modules/util.js';
import { BlockDataContainer } from './modules/BlockDataContainer.js';
import { test_PutBoxAboveElement, test_removePopupModalByElement } from './modules/modal.js';

class BlockRenderer {
    constructor(blockData) {
        this.mainGrid = document.getElementById('main-grid');
        this.blockData = blockData;
    }

    renderAll() {
        for (let i = 0; i < this.blockData.length; i++) {
            this.mainGrid.appendChild(this.blockData[i].getElement().outer);
        }
    }
}

let mainGrid = document.getElementById('main-grid');
window.blockData = new BlockDataContainer();

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
    modalElement.classList.toggle('shown');
}

modalElement.onclick = (event) => {
    if (event.target == this) {
        return;
    }   

    modalElement.classList.toggle('shown');
}

window.test_PutBoxAboveElement = test_PutBoxAboveElement;
window.test_removePopupModalByElement = test_removePopupModalByElement;