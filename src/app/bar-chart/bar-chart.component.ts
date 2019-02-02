import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IncidentObject } from '../incidentobject';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private http: HttpClient) { }
  
  done: boolean = false;
  allIncidents: IncidentObject[]
  integerArray: number[] = [];
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], label: 'Average # of crimes per hour'},
  ];

  ngOnInit() {
    for (var i = 0; i < 24; i++) {
      this.barChartLabels.push(i.toString());
    }
    this.http.post('api/queryActiveIncidents', {}).subscribe(res => {
      this.allIncidents = res['incidents'] as IncidentObject[];
      for (var i = 0; i < this.allIncidents.length; i++) {
        if(this.allIncidents[i].time.slice(9,11) == "PM" || this.allIncidents[i].time.slice(8,10) == "PM") {
          this.integerArray.push(parseInt(this.allIncidents[i].time.slice(0,2))+12);
        } else {
          this.integerArray.push(parseInt(this.allIncidents[i].time.slice(0,2)));
        }
      } 
      var current = 0;
      for (var i = 0; i < this.integerArray.length; i++) {
        if (this.integerArray[i] != current) {
          current = this.integerArray[i];
          this.barChartData[0].data[current] = this.countInteger(this.integerArray, current);
        }
      }
      this.done = true;
    });
  }

  countInteger(array, integer) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === integer) {
            count++;
        }
    }
    return count;
  } 
}
