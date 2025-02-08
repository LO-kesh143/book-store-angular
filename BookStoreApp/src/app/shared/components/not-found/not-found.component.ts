import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: false,  // <-- This makes it standalone
  // imports: [],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}