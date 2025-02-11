import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, ContentChild } from '@angular/core';
import { TestService } from '../../services/test.service';
import { AuthorModel } from '../../models/authors.model';
import { AuthorsAddressComponent } from '../authors-address/authors-address.component';

@Component({
  selector: 'app-authors',
  standalone: false,
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.scss'
})
export class AuthorsComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {
  
  @ContentChild(AuthorsAddressComponent) authAddress :AuthorsAddressComponent;

  @Input() data : number;
  @Input() data2 : boolean;
  @Input() author: AuthorModel;
  
  constructor() { 
    //console.log('Hello from child constructor!');
  }
  ngAfterContentInit(): void {
    console.log('After content init ' + this.authAddress?.address);
  }
  ngAfterContentChecked(): void {
    console.log('After content checked ' + this.authAddress?.address);
  }
  ngDoCheck(): void {
    //console.log(this.author);  
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes);  
  }

  ngOnInit(): void {
    //console.log('Hello from child ng onit!');
  }
}
