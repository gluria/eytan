import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectViewComponent } from './project-view/project-view.component';

//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { TypeListComponent } from './type-list/type-list.component';
import { SubTypeListComponent } from './sub-type-list/sub-type-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { ImageModalComponent } from './image-modal/image-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectViewComponent,
    TypeListComponent,
    SubTypeListComponent,
    ContactUsComponent,
    AboutComponent,
    ImageModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatDialogModule,
  ],
  entryComponents: [
    ImageModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
