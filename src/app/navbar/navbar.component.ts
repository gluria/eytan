import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../mock-projects';
import { Project } from '../project';
//import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  projects = PROJECTS;

  onSelect( project:Project ): void {
    //this.selectedProject = project;
    sessionStorage.setItem('projectType', project.projectName);
    console.log(sessionStorage.getItem('projectType'));
  }

  ngOnInit() {
  }

}
