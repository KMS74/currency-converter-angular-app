import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-converter-grid',
  templateUrl: './currency-converter-grid.component.html',
  styleUrls: ['./currency-converter-grid.component.css'],
})
export class CurrencyConverterGridComponent {
  @Input() popularCurrenciesConvertedAmounts: {
    [key: string]: number;
  } = {};

  @Input() amount!: number;
  @Input() baseCurrency!: string;
}
