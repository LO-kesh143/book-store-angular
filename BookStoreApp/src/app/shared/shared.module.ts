import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { ToolbarComponent } from '../shared/components/toolbar/toolbar.component';
import { AuthorsComponent } from './components/authors/authors.component';


@NgModule({
  declarations: [FooterComponent, NotFoundComponent, ToolbarComponent, AuthorsComponent],
    imports: [
        CommonModule, 
        RouterModule,
        MaterialModule
      ],
        exports: [ToolbarComponent, FooterComponent, MaterialModule, AuthorsComponent ],
        //schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
