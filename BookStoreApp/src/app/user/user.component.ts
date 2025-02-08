import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: false,  // <-- This makes it standalone
  // imports: [],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}