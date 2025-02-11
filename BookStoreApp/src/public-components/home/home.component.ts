import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { CounterService } from '../../app/shared/services/counter.service';
import { AuthorsComponent } from '../../app/shared/components/authors/authors.component';
import { MatButton } from '@angular/material/button';
import { TestService } from '../../app/shared/services/test.service';
import { AuthorModel } from '../../app/shared/models/authors.model';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {

   public count : number = 0;
   public test : boolean = false;
   public obj : AuthorModel = { id: 10, name : 'Lokesh' };

  constructor(public _testService: TestService) {
    console.log('Hello from Parent constructor!');
   }

  public counter() : void {
    this.count++;
    this.test = !this.test;
    this.obj.id = this.count++;
    // this.obj = { id: this.count++, name: 'Lokesh Kumawat' };
  }

  ngOnInit(): void {
    console.log('Hello from parent ng onit!');
    
  }
}
