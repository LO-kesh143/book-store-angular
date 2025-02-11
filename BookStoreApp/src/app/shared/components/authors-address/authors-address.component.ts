import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors-address',
  standalone : false,
  templateUrl: './authors-address.component.html',
  styleUrl: './authors-address.component.scss'
})
export class AuthorsAddressComponent implements OnInit {
  
  @Input() address : string;

  constructor() { }

  ngOnInit(): void {
    
  }

}
