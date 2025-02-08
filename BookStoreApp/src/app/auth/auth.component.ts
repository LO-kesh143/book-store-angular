import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  standalone: false,  // <-- This makes it standalone
  // imports: [],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
