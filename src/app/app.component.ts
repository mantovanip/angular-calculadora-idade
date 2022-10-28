import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public data_nasc: number = 0;
  public result: number = 0;
  public result_month: number = 0;
  public result_days: number = 0;

  calcular() {
    this.result = 2022 - this.data_nasc;
    this.result_month = this.result * 12;
    this.result_days = this.result_month * 365;
  }
  limpar() {
    this.result = 0;
    this.result_month = 0;
    this.result_days = 0;
  }
}
