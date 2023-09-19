import {Component} from '@angular/core';
import {CarService} from "../../services/car.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  cars: any[] = [];

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.carService.getCars().subscribe((cars) => {
      this.cars = cars;
    })
  }
}
