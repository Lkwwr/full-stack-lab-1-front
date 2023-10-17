import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../../classes/user";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  users!: User[];

  constructor(private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  onSubmit(username: string, password: string) {
    if (username == "" || password == "") alert("All fields should be filled!");
    else {
      let logged = false;
      for (let user of this.users) {
        if (user.username == username && user.password == password) {
          logged = true;
          localStorage.setItem("userId", String(user.id));
        }
      }
      if (logged) {
        this.router.navigate(['']);
      } else alert("Check credentials!");
    }
  }

  onReset() {
    this.router.navigate(['/register']);
  }
}
