import { VizsgaModel } from './vizgsa.model';

export class VizsgaController {
    private model: VizsgaModel;

    constructor(model: VizsgaModel) {
        this.model = model;
    }

    setMaxPontszam(maxPontszam: number): void {
        this.model.setMaxPontszam(maxPontszam);
    }

    setElertPontszam(elertPontszam: number): void {
        this.model.setElertPontszam(elertPontszam);
    }

    eredmeny(): string {
        return this.model.eredmeny();
    }
}
