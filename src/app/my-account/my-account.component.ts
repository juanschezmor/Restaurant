import { Component } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css'],
})
export class MyAccountComponent {
  showAddCard = false;
  showChangeEmail = false;
  showChangePassword = false;

  openAddCard() {
    this.showAddCard = true;
  }

  closeAddCard() {
    this.showAddCard = false;
  }

  openChangeEmail() {
    console.log('Hello');
    this.showChangeEmail = true;
  }

  closeChangeEmail() {
    this.showChangeEmail = false;
  }

  openChangePassword() {
    this.showChangePassword = true;
  }

  closeChangePassword() {
    this.showChangePassword = false;
  }
}
