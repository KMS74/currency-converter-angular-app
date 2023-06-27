export type Rates = {
  [USD: string]: number;
  AUD: number;
  CAD: number;
  PLN: number;
  GBP: number;
  EUR: number;
  NZD: number;
  CNY: number;
  CHF: number;
};

export type RatesResponse = {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: Rates;
};
