import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  title = 'colegio';

  user = '';

  password = '';

  buttonIsDisabled = true;

  regex = new RegExp('.+@.*\.com');

  verifyCredentials(event: any, inputId: number) {
    if (inputId == 0) {
      this.user = event.currentTarget.value;
    }
    if (inputId == 1) {
      this.password = event.currentTarget.value;
    }
    if (this.regex.test(this.user) && this.password.length > 8) {
      this.buttonIsDisabled = false;
    } else {
      this.buttonIsDisabled = true;
    }
  }
}
