import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: false,  // <-- This makes it standalone
  // imports: [],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}