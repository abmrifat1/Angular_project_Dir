import { User } from './user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgFormsTDF';
  topics = ['Angular','Node','React']

  userModel= new User('','smith@test.com',90075556,'default','morning',true);
}
