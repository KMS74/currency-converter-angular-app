import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rates } from 'src/app/models/rates.model';
import { CurrencyService } from 'src/app/services/currency.service';
import { formatDate } from 'src/app/utils/date-utils';

@Component({
  selector: 'app-convertal-panel',
  templateUrl: './convertal-panel.component.html',
  styleUrls: ['./convertal-panel.component.css'],
})
export class ConvertalPanelComponent implements OnInit {
  baseCurrency = 'EUR';
  targetCurrency = 'USD';
  amount = 1;

  // the 9 most popular currencies
  currencies: string[] = [
    'USD',
    'AUD',
    'CAD',
    'PLN',
    'GBP',
    'EUR',
    'NZD',
    'CNY',
    'CHF',
  ];

  lastUpdateDate!: string;
  result = 0;
  convertedAmounts: {
    [key: string]: number;
  } = {};

  exchangeRates!: Rates;

  constructor(
    private currencyService: CurrencyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currencyService.getRates().subscribe(data => {
      this.exchangeRates = data.rates;
      this.lastUpdateDate = formatDate(data.timestamp);
    });
  }

  convert() {
    const fromRate = this.exchangeRates[this.baseCurrency]; // 1
    const toRate = this.exchangeRates[this.targetCurrency]; //1 EUR =  1.09313 USD
    console.log(this.exchangeRates[this.targetCurrency]);

    this.result = (this.amount * toRate) / fromRate; // (5 * 1.09313) / 1

    for (const currency in this.exchangeRates) {
      this.convertedAmounts[currency] =
        (this.amount * this.exchangeRates[currency]) / fromRate;
    }
  }

  switchCurrencies(): void {
    const temp = this.baseCurrency;
    this.baseCurrency = this.targetCurrency;
    this.targetCurrency = temp;
    this.convert();
  }

  navigateToDetailsPage() {
    this.router.navigate(['/details'], {
      queryParams: {
        baseCurrency: this.baseCurrency,
        targetCurrency: this.targetCurrency,
      },
    });
  }
}
