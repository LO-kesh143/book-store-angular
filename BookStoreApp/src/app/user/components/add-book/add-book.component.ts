import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  standalone: false,  // <-- This makes it standalone
  // imports: [],
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}