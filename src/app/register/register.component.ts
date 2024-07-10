import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user: any = {};

  constructor(private UserService: UserService, private router: Router) {}

  register() {
    console.log(this.user);
    const nuevoUsuario = new User(
      this.user.email,
      this.user.password,
      this.user.adress,
      this.user.zipcode
    );

    this.UserService.register(nuevoUsuario).subscribe((response) => {
      console.log('Registro exitoso:', response);
      this.router.navigate(['/meals']);
    });
  }
}
