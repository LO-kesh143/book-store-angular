import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  standalone: false,  // <-- This makes it standalone
  // imports: [],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}