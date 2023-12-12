import {Component} from '@angular/core';
import {User} from "../../classes/user";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
  constructor(private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    if (localStorage.getItem("token")) this.router.navigate(['/'])
  }

  onSubmit(name: string, username: string, password: string) {
    if (name == "" || username == "" || password == "") alert("All fields should be filled!");
    else {
      let user = new User(0, name, username, password);
      this.userService.register(user).subscribe(
        (response) => {
          this.router.navigate(['/login']);
        },
        error => alert("Username is already taken!"));
      console.log(localStorage.getItem("token"));
    }
  }

  onReset() {
    this.router.navigate(['/login']);
  }
}
