class SingleDataBlock {
    constructor(title) {
        this.title = title;
        this.internalID = generateID();
        this.contents = '';
    }

    getElement() {
        let section = new SectionWrapper();

        section.outer.id = this.internalID;
        section.outer.classList.add('single-data-block');
    
        let textElement = elem('p');
        textElement.innerText = this.title;
        let input = elem('div');
        input.classList.add('input');
        input.contentEditable = 'true';
        input.innerText = this.contents;

        input.oninput = (event) => {
            this.contents = event.target.textContent;
        }
    
        section.inner.appendChild(textElement);
        section.inner.appendChild(input);

        return section;
    }

    toJSON() {
        return {
            'type': 'SingleDataBlock',
            'data': {
                title: this.title,
                contents: this.contents
            },
            'internalID': this.internalID
        }
    }
}

class CountersBlock {
    constructor() {
        this.title = title;
        this.internalID = generateID();
        this.contents = {};
    }

    getElement() {

    }

    toJSON() {

    }
}