import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertalPanelComponent } from './convertal-panel.component';

describe('ConvertalPanelComponent', () => {
  let component: ConvertalPanelComponent;
  let fixture: ComponentFixture<ConvertalPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConvertalPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConvertalPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
