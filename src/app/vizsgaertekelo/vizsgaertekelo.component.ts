import { Component } from '@angular/core';
import { VizsgaModel } from './vizgsa.model';
import { VizsgaController } from './vizsga.controller';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vizsgaertekelo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './vizsgaertekelo.component.html',
  styleUrls: ['./vizsgaertekelo.component.css']
})
export class VizsgaertekeloComponent {
  private controller: VizsgaController = new VizsgaController(new VizsgaModel());
  maxPontszam: number = 100;
  elertPontszam: number = 0;
  ertekel: string = '';

  eredmeny(): void {
    if (this.maxPontszam < 0 || this.elertPontszam < 0 || this.elertPontszam > this.maxPontszam) {
      alert('Hibás pontszámok!');
      return;
    }
    this.controller.setMaxPontszam(this.maxPontszam);
    this.controller.setElertPontszam(this.elertPontszam);
    this.ertekel = this.controller.eredmeny();
  }
}
