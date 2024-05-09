import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StawberryComponent } from './stawberry.component';

describe('StawberryComponent', () => {
  let component: StawberryComponent;
  let fixture: ComponentFixture<StawberryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StawberryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StawberryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
