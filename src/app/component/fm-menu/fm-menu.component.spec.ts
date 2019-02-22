import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmMenuComponent } from './fm-menu.component';

describe('FmMenuComponent', () => {
  let component: FmMenuComponent;
  let fixture: ComponentFixture<FmMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
