export class VizsgaModel {
    private maxPontszam: number = 0;
    private elertPontszam: number = 0;
    private isHelyes: string =  '';


    setMaxPontszam(maxPonsztam: number): void {
        this.maxPontszam = maxPonsztam;
    }

    setElertPontszam(elertPontszam: number): void {
        this.elertPontszam = elertPontszam;
    }

    getMaxPontszam(): number {
        return this.maxPontszam;
    }

    getElertPontszam(): number {
        return this.elertPontszam;
    }

    eredmeny(): string {
        const arany = (this.elertPontszam / this.maxPontszam) * 100;

        if (arany >= 0 && arany <= 50) {
            return 'Elégtelen';
        } else if (arany <= 60) {
            return 'Elégséges';
        } else if (arany <= 70) {
            return 'Közepes';
        } else if (arany <= 80) {
            return 'Jó';
        } else {
            return 'Jeles';
        }
    }
}