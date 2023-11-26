function newSection() {
    let section = document.createElement('section');
    section.draggable = 'true';
    section.addEventListener('dragstart', handleDragStart);
    section.addEventListener('dragover', handleDragOver);
    section.addEventListener('dragenter', handleDragEnter);
    section.addEventListener('dragleave', handleDragLeave);
    section.addEventListener('dragend', handleDragEnd);
    section.addEventListener('drop', handleDrop);
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