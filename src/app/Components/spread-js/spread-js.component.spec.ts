import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadJsComponent } from './spread-js.component';

describe('SpreadJsComponent', () => {
  let component: SpreadJsComponent;
  let fixture: ComponentFixture<SpreadJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
