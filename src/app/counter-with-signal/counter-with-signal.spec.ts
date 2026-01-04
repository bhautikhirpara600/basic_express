import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterWithSignal } from './counter-with-signal';

describe('CounterWithSignal', () => {
  let component: CounterWithSignal;
  let fixture: ComponentFixture<CounterWithSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterWithSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterWithSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
