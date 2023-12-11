import * as drag from './drag.js';

export class SectionWrapper {
    constructor() {
        this.outer = document.createElement('section');
        this.inner = document.createElement('div');

        this.inner.classList.add('inner');

        let settingsButton = document.createElement('img');
        settingsButton.src = 'images/gear.svg';
        settingsButton.classList.add('settings-btn');

        this.inner.appendChild(settingsButton);

        this.outer.draggable = 'true';
        this.outer.ondragstart = drag.handleDragStart;
        this.outer.ondragover = drag.handleDragOver;
        this.outer.ondragenter = drag.handleDragEnter;
        this.outer.ondragleave = drag.handleDragLeave;
        this.outer.ondragend = drag.handleDragEnd;
        this.outer.ondrop = drag.handleDrop;

        this.outer.appendChild(this.inner);
    }
}