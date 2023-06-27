import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deatils-page',
  templateUrl: './deatils-page.component.html',
  styleUrls: ['./deatils-page.component.css'],
})
export class DeatilsPageComponent implements OnInit {
  baseCurrency = 'EUR';
  targetCurrency = 'USD';
  amount = 1;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.baseCurrency = params['baseCurrency'];
      this.targetCurrency = params['targetCurrency'];
      this.amount = params['amount'];
      console.log(this.amount, this.baseCurrency, this.targetCurrency);
    });
  }
}
