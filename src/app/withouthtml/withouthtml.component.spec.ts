import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithouthtmlComponent } from './withouthtml.component';

describe('WithouthtmlComponent', () => {
  let component: WithouthtmlComponent;
  let fixture: ComponentFixture<WithouthtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithouthtmlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithouthtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
