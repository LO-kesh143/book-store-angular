import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../app/shared/services/counter.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {

  constructor(public _counterService : CounterService){ }

  ngOnInit(): void {
    
  }

  public increase():void{
    this._counterService.incCounter();
  }

  public decrease():void{
    this._counterService.decCounter();
  }
}
