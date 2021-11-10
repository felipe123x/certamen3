import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StgoComponent } from './stgo.component';

describe('StgoComponent', () => {
  let component: StgoComponent;
  let fixture: ComponentFixture<StgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
