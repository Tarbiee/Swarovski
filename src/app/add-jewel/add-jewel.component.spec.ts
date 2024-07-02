import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJewelComponent } from './add-jewel.component';

describe('AddJewelComponent', () => {
  let component: AddJewelComponent;
  let fixture: ComponentFixture<AddJewelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddJewelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJewelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
