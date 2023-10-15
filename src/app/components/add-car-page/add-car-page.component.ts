import {Component} from '@angular/core';
import {CarService} from "../../services/car.service";
import {Router} from "@angular/router";
import {Car} from "../../classes/car";

@Component({
  selector: 'app-add-car-page',
  templateUrl: './add-car-page.component.html',
  styleUrls: ['./add-car-page.component.css']
})
export class AddCarPageComponent {
  constructor(private carService: CarService,
              private router: Router) {
  }

  onSubmit(brand: string, model: string, body: string, cost: number
  ) {
    if (brand == "" || model == "" || body == "" || cost == 0) {
      alert("All fields should be filled!");
    }
    else {
      this.carService.addCar(new Car(0, brand, model, body, cost));
      this.router.navigate([""]);
    }
  }

  protected readonly Number = Number;
}
