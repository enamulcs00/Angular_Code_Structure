import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupVolumeFormComponent } from './group-volume-form.component';

describe('GroupVolumeFormComponent', () => {
  let component: GroupVolumeFormComponent;
  let fixture: ComponentFixture<GroupVolumeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupVolumeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupVolumeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
