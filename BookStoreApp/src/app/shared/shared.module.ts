import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { ToolbarComponent } from '../shared/components/toolbar/toolbar.component';


@NgModule({
  declarations: [FooterComponent, NotFoundComponent, ToolbarComponent],
    imports: [
        CommonModule, 
        RouterModule,
        MaterialModule
      ],
        exports: [ToolbarComponent, FooterComponent, MaterialModule],
        //schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
