import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LispOnlineComponent } from './lisp-online.component';

describe('LispOnlineComponent', () => {
  let component: LispOnlineComponent;
  let fixture: ComponentFixture<LispOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LispOnlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LispOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
