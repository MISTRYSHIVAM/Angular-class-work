import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutCssComponent } from './without-css.component';

describe('WithoutCssComponent', () => {
  let component: WithoutCssComponent;
  let fixture: ComponentFixture<WithoutCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithoutCssComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithoutCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
