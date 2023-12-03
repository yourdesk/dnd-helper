class BlockDataContainer {
    constructor() {
        this.blocks = [];
        this.currentIndex = 0;
    }

    add(block) {
        this.blocks.push(block);
    }

    getBlockById(id) {
        let temp;

        for (let i = 0; i < this.blocks.length; i++) {
            if (this.blocks[i].internalID === id) {
                return this.blocks[i];
            }
        }

        console.error('no block found ' + id);
        return null;
    }

    toJSON() {
        let tempBlocks = [];

        for (let i = 0; i < this.blocks.length; i++) {
            tempBlocks.push(this.blocks[i].toJSON());
        }

        return {blocks: tempBlocks};
    }
}