//The app component is the root component of the application, it defines the root tag of the app as with the selector property of the @Component decorator.

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular demo ';
}