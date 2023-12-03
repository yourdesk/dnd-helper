class SingleDataBlock {
    constructor(title) {
        this.title = title;
        this.internalID = generateID();
        this.contents = '';
    }

    getElement() {
        let section = newSection();

        section.id = this.internalID;
    
        let textElement = elem('p');
        textElement.innerText = this.title;
        let input = elem('div');
        input.classList.add('input');
        input.contentEditable = 'true';
        input.innerText = this.contents;

        input.oninput = (event) => {
            console.log(event.target.parentNode)
            this.contents = event.target.textContent;
        }
    
        section.appendChild(textElement);
        section.appendChild(input);

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