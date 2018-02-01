import { Component, OnInit } from '@angular/core';
//import { Project } from '../project';
import { PROJECTS } from '../mock-projects';
import { Project } from '../project';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {

  constructor() { }

  projects = PROJECTS;

  //selectedProject: Project;

  onSelect( project:Project ): void {
    //this.selectedProject = project;
    sessionStorage.setItem('projectType', project.projectName);
    console.log(sessionStorage.getItem('projectType'));
  }

  ngOnInit() {
  }

}
