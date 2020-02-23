export class Field {
    red: number;
    white: number;
    harvest: boolean;
    sold: boolean;

    constructor() {
        this.init();
    }

    init() {
        this.red = 0;
        this.white = 0;
        this.harvest = false;
        this.sold = false;
    }
}

export class Tree {
    fields: Field[];
    redGrapes: boolean[];
    whiteGrapes: boolean[];
    redGlasses: boolean[];
    whiteGlasses: boolean[];
    roseGlasses: boolean[];
    champagneGlasses: boolean[];

    constructor() {
        this.init();
    }

    init() {
        this.fields = [...Array(3)].map(x => new Field());
        this.redGrapes = [...Array(9)].map(x => false);
        this.whiteGrapes = [...Array(9)].map(x => false);
        this.redGlasses = [...Array(9)].map(x => false);
        this.whiteGlasses = [...Array(9)].map(x => false);
        this.roseGlasses = [...Array(6)].map(x => false);
        this.champagneGlasses = [...Array(3)].map(x => false);
    }
}
