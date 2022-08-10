import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  urlApi: string;
  urlApp: string;
  constructor() {
    this.urlApi = environment.apiUrl;
    this.urlApp = environment.appUrl;
  }
}
