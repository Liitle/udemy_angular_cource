import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UserNameComponent {
  userName = '';
  isUserNameResatable = false;

  onResetUserName() {
    this.userName = '';
  }

  onUpdateUserName(event: Event) {
    this.isUserNameResatable = (<HTMLInputElement>event.target).value !== '';
  }
}
