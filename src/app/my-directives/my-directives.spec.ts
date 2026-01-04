import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDirectives } from './my-directives';

describe('MyDirectives', () => {
  let component: MyDirectives;
  let fixture: ComponentFixture<MyDirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDirectives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDirectives);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
