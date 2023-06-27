import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyConverterGridComponent } from './currency-converter-grid.component';

describe('CurrencyConverterGridComponent', () => {
  let component: CurrencyConverterGridComponent;
  let fixture: ComponentFixture<CurrencyConverterGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyConverterGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyConverterGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
