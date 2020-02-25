import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactive-forms';
  registrationForm = new FormGroup({
    userName: new FormControl('abm'),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });
}
