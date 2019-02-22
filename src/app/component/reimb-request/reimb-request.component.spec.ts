import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbRequestComponent } from './reimb-request.component';

describe('ReimbRequestComponent', () => {
  let component: ReimbRequestComponent;
  let fixture: ComponentFixture<ReimbRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReimbRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
