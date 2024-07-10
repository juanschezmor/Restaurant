import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: any = {};
  constructor(private UserService: UserService, private router: Router) {}

  login() {
    this.UserService.login(this.user.email, this.user.password).subscribe(
      (response) => {
        if (response > 0) {
          console.log('Login exitoso:', response);
          this.router.navigate(['/meals']);
        } else {
          console.log('Login fallido:');
        }
      }
    );
  }
}
