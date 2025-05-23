import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashtextComponent } from './dashtext.component';

describe('DashtextComponent', () => {
  let component: DashtextComponent;
  let fixture: ComponentFixture<DashtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashtextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
