import {Component} from '@angular/core';
import {CarService} from "../../services/car.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  constructor(private carService: CarService,
              private router: Router) {
  }

  onSubmit(brand: string, model: string, body: string, cost: number
  ) {
    this.carService.addCar(brand, model, body, cost);
    this.router.navigate([""]);
  }

  protected readonly Number = Number;
}
