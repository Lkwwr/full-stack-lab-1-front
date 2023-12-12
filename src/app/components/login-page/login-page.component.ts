import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../../classes/user";
import {AuthRequest} from "../../classes/auth-request";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    if (localStorage.getItem("token")) this.router.navigate(['/'])
  }

  onSubmit(username: string, password: string) {
    if (username == "" || password == "") alert("All fields should be filled!");
    else {
      this.userService.auth(new AuthRequest(username, password)).subscribe((authResponse) =>{
        localStorage.setItem("token", String(authResponse.token));
        this.router.navigate([''])
      },
        error => alert("Check credentials!"));
      console.log(localStorage.getItem("token"));
    }
  }

  onReset() {
    this.router.navigate(['/register']);
  }
}
