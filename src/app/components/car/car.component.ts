import {Component} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  brand = 'BMW';
  model = 'E30';
  speed = 140;
  colors: Colors = {
    body: 'black',
    interior: 'white',
    rims: 'black'
  };
  options: string[] = [
    "ABS",
    "Auto-parking",
    "Chair heating"
  ];

  constructor() {
  }

  carSelect(carName:string) {
    if (carName == 'Toyota'){
      this.brand = 'Toyota';
      this.model = 'Supra';
      this.speed = 230;
      this.colors = {
        body: 'orange',
        interior: 'red',
        rims: 'white'
      };
      this.options = [];
    }
    else if (carName == 'Audi'){
      this.brand = 'Audi';
      this.model = 'RS6';
      this.speed = 230;
      this.colors = {
        body: 'black',
        interior: 'black',
        rims: 'black'
      };
      this.options = [];
    }
    else if (carName == 'Porsche'){
      this.brand = 'Porsche';
      this.model = '991';
      this.speed = 230;
      this.colors = {
        body: 'red',
        interior: 'black',
        rims: 'black'
      };
      this.options = [];
    }
  }
}

interface Colors {
  body: string,
  interior: string,
  rims: string
}
