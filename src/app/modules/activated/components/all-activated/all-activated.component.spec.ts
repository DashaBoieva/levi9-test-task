import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllActivatedComponent } from './all-activated.component';

describe('AllActivatedComponent', () => {
  let component: AllActivatedComponent;
  let fixture: ComponentFixture<AllActivatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllActivatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllActivatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
