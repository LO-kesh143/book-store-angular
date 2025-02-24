import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutUsComponent } from '../public-components/about-us/about-us.component';
import { HowItWorksComponent } from '../public-components/how-it-works/how-it-works.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from '../public-components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CounterService } from './shared/services/counter.service';
import { Counter2Service } from './shared/services/counter2.service';
import { TestService } from './shared/services/test.service';
import { counterFacotry } from './shared/services/counter.factory';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HowItWorksComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
    providers: [ 
    provideHttpClient(withInterceptorsFromDi()),
    counterFacotry,
    TestService,
     { provide : 'aapTitle', useValue : { title : 'This is title', desc : 'this is title desc'} }
    ],
  bootstrap: [AppComponent],
})
export class AppModule { }