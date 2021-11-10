import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiobioComponent } from './biobio.component';

describe('BiobioComponent', () => {
  let component: BiobioComponent;
  let fixture: ComponentFixture<BiobioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiobioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiobioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
