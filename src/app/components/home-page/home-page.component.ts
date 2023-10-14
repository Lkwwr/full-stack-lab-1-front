import {Component} from '@angular/core';
import {HomeService} from "../../services/home.service";
import {Home} from "../../classes/home";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  home!: Home;

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.homeService.getHome().subscribe((home) => {
      this.home = home;
    })
  }
}
