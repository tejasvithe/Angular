import { Component } from '@angular/core';
import {ViewChild} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class AppComponent {
  @ViewChild('cchart') cchart;
 

  public columnChartData:any =  {
    chartType: 'ColumnChart',
    dataTable: [
      ['Country', 'Performance', ],
      ['Germany', 700 ],
      ['USA', 300 ],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 800]
    ],
    options: {
    hAxis: {
      title: 'Countries'
    },
    vAxis: {
      title: 'Performance'
    }}
  };
  
  onResize(event){

    let googleChartWrapper = this.cchart.wrapper;
    this.cchart.redraw();
    // event.target.innerWidth; // window width
    //this.noData = false;
    //this.sizeChange = true;
    //this.drawChart();
   }
}
