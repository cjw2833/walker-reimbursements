import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpMenuComponent } from './emp-menu.component';

describe('EmpMenuComponent', () => {
  let component: EmpMenuComponent;
  let fixture: ComponentFixture<EmpMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
