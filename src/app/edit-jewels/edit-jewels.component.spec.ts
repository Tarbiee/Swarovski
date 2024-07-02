import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJewelsComponent } from './edit-jewels.component';

describe('EditJewelsComponent', () => {
  let component: EditJewelsComponent;
  let fixture: ComponentFixture<EditJewelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditJewelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditJewelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
