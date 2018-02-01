import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TypeListComponent } from './type-list/type-list.component';
import { SubTypeListComponent } from './sub-type-list/sub-type-list.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: TypeListComponent },
  { path: 'type/:item', component: SubTypeListComponent },
  { path: 'projectview/:subproject', component: ProjectViewComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
