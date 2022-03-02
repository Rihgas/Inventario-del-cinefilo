import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSerieComponent } from './register-serie.component';

describe('RegisterSerieComponent', () => {
  let component: RegisterSerieComponent;
  let fixture: ComponentFixture<RegisterSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
