import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharFormEditComponent } from './char-form-edit.component';

describe('CharFormEditComponent', () => {
  let component: CharFormEditComponent;
  let fixture: ComponentFixture<CharFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharFormEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
