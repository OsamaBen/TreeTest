import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelTabsetMergeComponent } from './excel-tabset-merge.component';

describe('ExcelTabsetMergeComponent', () => {
  let component: ExcelTabsetMergeComponent;
  let fixture: ComponentFixture<ExcelTabsetMergeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelTabsetMergeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelTabsetMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
