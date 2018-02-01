import { Component } from '@angular/core';
import { PROJECTS } from '../mock-projects';
import { Project } from '../project';

@Component({
  selector: 'app-sub-type-list',
  templateUrl: './sub-type-list.component.html',
  styleUrls: ['./sub-type-list.component.css']
})
export class SubTypeListComponent {

  constructor() { }

  projects = PROJECTS;
  projectTypeName = sessionStorage.getItem('projectType');
  project = this.projects[this.findProjectIndex()];

  findProjectIndex() {
    var index;
    for(var i=0; i<this.projects.length; i++){
      if(this.projects[i].projectName===this.projectTypeName){
        index=i;
      }
    }
    console.log('sub type list:')
    console.log(this.projectTypeName)
    console.log(index);
    sessionStorage.setItem('projectIndex', index);
    return index;
  }//End of findProjectIndex



}
