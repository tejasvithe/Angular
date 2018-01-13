import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

 import {Ng2GoogleChartModule} from 'ng2-googlechart';
 import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { AppComponent } from './app.component';
import { ChartDemoComponent } from './chart-demo/chart-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartDemoComponent,
  ],
  imports: [
    BrowserModule,
    Ng2GoogleChartModule,
    Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
