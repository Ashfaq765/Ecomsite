import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixfruitComponent } from './mixfruit.component';

describe('MixfruitComponent', () => {
  let component: MixfruitComponent;
  let fixture: ComponentFixture<MixfruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MixfruitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MixfruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
