import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTypeListComponent } from './sub-type-list.component';

describe('SubTypeListComponent', () => {
  let component: SubTypeListComponent;
  let fixture: ComponentFixture<SubTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
