import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheHeaderComponent } from './components/the-header/the-header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ConvertalPanelComponent } from './components/convertal-panel/convertal-panel.component';
import { DeatilsPageComponent } from './pages/deatils-page/deatils-page.component';
import { CurrencyConverterGridComponent } from './components/currency-converter-grid/currency-converter-grid.component';

@NgModule({
  declarations: [AppComponent, TheHeaderComponent, HomePageComponent, ConvertalPanelComponent, DeatilsPageComponent, CurrencyConverterGridComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
