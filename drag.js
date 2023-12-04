function handleDragStart(e) {
    this.style.opacity = '0.4';

    dragSrcEl = this;
    globalDraggedId = this.id;
}

function handleDragEnd(e) {
    this.style.opacity = '1';
}

function handleDragOver(e) {
    e.preventDefault();
    return false;
}

function handleDragEnter(e) {
    this.classList.add('over');
}

function handleDragLeave(e) {
    this.classList.remove('over');
}

function handleDrop(e) {
    globalDroppedId = this.id;
    e.stopPropagation();
    
    let newDraggedBlock = blockData.getBlockById(globalDraggedId);
    let newDroppedBlock = blockData.getBlockById(globalDroppedId);

    let draggedElement = document.getElementById(globalDraggedId);
    let droppedElement = document.getElementById(globalDroppedId);

    draggedElement.replaceWith(newDroppedBlock.getElement().outer);
    droppedElement.replaceWith(newDraggedBlock.getElement().outer);

    console.log(draggedElement, droppedElement);

    return false;
}