import { Injectable } from '@angular/core';

@Injectable()
export class InMemoryDataService {

  projects = [
    { projectName: 'Resdetial', projectHebrewName: 'מגורים'},
    { projectName: 'Offices', projectHebrewName: 'משרדים'},
    { projectName: 'Comercial', projectHebrewName: 'מסחרי'},
    { projectName: 'tama', projectHebrewName: 'תמא38'},
    { projectName: 'prefab', projectHebrewName: 'PREFAB'},
  ];

}
