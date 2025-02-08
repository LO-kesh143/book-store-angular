import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: false,  // <-- This makes it standalone
  // imports: [],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}