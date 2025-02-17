import { AfterViewChecked, AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
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

export class HomeComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
   @ViewChild('btnCounter') btnCounter : ElementRef;
   @ViewChild(AuthorsComponent) authComponent : AuthorsComponent;

   public count : number = 0;
   public test : boolean = false;
   public address : string = 'India';
   public obj : AuthorModel = { id: 10, name : 'Lokesh' };

   private time : any;

  constructor(public _testService: TestService) {
    //console.log('Hello from Parent constructor!');
   }
  ngOnDestroy(): void {
    clearInterval(this.time);
    console.log('Home component destroy');
  }
  ngAfterViewChecked(): void {
    //console.log(this.authComponent.childCounter);
  }
  ngAfterViewInit(): void {
    // console.log(this.btnCounter);
    // this.btnCounter.nativeElement.innerHTML = 'Button text updated';
  }

  public counter() : void {
    this.count++;
    this.test = !this.test;
    this.obj.id = this.count++;
    this.address = this.address + this.count;
    // this.obj = { id: this.count++, name: 'Lokesh Kumawat' };
  }

  timer() : void {
    this.time = setInterval(() => {
      this.count++;
      console.log(this.count++);
    }, 1000)
  }

  ngOnInit(): void {
    console.log('Hello from parent ng onit!');
    this.timer();
  }
}
