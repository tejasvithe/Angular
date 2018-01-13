import { Component, OnInit } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-chart-demo',
  templateUrl: './chart-demo.component.html',
  styleUrls: ['./chart-demo.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class ChartDemoComponent implements OnInit {
  constructor() { 
  }

  ngOnInit() {
    this.drawChart();
  }
  //google.setOnLoadCallback(drawChart);
  // var labels = ['DS', 'LD', 'EC', 'M3', 'DS Lab', 'EC Lab'];
   drawChart(){
   var data = google.visualization.arrayToDataTable([
    ['subjectName', 'Marks'],
    ['DS',  83],
    ['LD',  75],
    ['EC',  67],
    ['M3',  50],
    ['DS Lab',90],
    ['EC Lab',35]
  ]);
 // var chartType = 'Column';

 var options = {
    'bars': 'vertical',
    //'chartArea': { 'left': 150, 'bottom': 50, 'right': 100, 'top': 50 },
    hAxis: {
      title: 'Subject'
    },
    vAxis: {
      title: 'Marks'
    }
  }

  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div3'));
  chart.draw(data,options);
}
    //chart.draw(data,options);
  

    onResize(event){
     // event.target.innerWidth; // window width
     this.drawChart();
    }
  // $(window).resize({
  //   this.drawChart();
  //   //drawChart2();
  // });
  
  

}
