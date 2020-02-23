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

  userModel= new User('smith','smith@test.com',0975556,'','morning',true);
}
