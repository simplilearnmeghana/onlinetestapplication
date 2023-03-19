import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddONComponent } from './add-on.component';

describe('AddONComponent', () => {
  let component: AddONComponent;
  let fixture: ComponentFixture<AddONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddONComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
