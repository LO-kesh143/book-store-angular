import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { TestService } from '../../services/test.service';
import { AuthorModel } from '../../models/authors.model';

@Component({
  selector: 'app-authors',
  standalone: false,
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.scss'
})
export class AuthorsComponent implements OnInit, OnChanges, DoCheck {
  
  @Input() data : number;
  @Input() data2 : boolean;
  @Input() author: AuthorModel;
  
  constructor() { 
    console.log('Hello from child constructor!');
  }
  ngDoCheck(): void {
    console.log(this.author);  
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);  
  }

  ngOnInit(): void {
    console.log('Hello from child ng onit!');
  }
}
