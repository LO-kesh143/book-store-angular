import { Component } from '@angular/core';
import { SharedModule } from "./shared/shared.module"; 

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  email = 'sample@gmail.com';
  title = 'bookStoreApp';
}