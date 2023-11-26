function handleDragStart(e) {
    this.style.opacity = '0.4';

    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    e.dataTransfer.setData('application/x-element-classes', this.className);
    e.dataTransfer.setData('application/x-element-id', this.id);
}

function handleDragEnd(e) {
    this.style.opacity = '1';

    mainGrid.childNodes.forEach(element => {
        element.classList.remove('over');
    });
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
    e.stopPropagation();

    if (dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        dragSrcEl.classList = this.classList;
        dragSrcEl.id = this.id; 
        this.innerHTML = e.dataTransfer.getData('text/html');
        this.className = e.dataTransfer.getData('application/x-element-classes');
        this.id = e.dataTransfer.getData('application/x-element-id')
    }

    return false;
}