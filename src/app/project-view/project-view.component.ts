import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { PROJECTS } from '../mock-projects';
import { Project } from '../project';
import { ImageModalComponent } from '../image-modal/image-modal.component';

@Component({
  selector: 'app-project-view',
  moduleId: module.id.toString(),
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent  {

  constructor( private route:ActivatedRoute,
               public dialog: MatDialog) { }

  subProjectName = this.route.snapshot.paramMap.get('subproject');
  projects = PROJECTS;
  //subProject = this.projects[this.findProjectIndex()];
  projectIndex = sessionStorage.getItem('projectIndex');
  project = this.projects[this.projectIndex];
  subProject = this.project.projects[this.findSubProjectIndex()];

  findSubProjectIndex() {
    var index;
    for(var i=0; i<this.project.projects.length; i++){
      if(this.project.projects[i].subProjectName===this.subProjectName){
        index=i;
      }
    }

    return index;
  }//End of findProjectIndex

  openDialog(selectedImage: string): void {
    console.log(selectedImage);
    let dialogRef = this.dialog.open(ImageModalComponent, {
      width: 'auto',
      data: { imageSrc: selectedImage }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
