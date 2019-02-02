import { Component, OnInit } from '@angular/core';
import { IncidentObject } from '../incidentobject';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IncidentService } from '../incident.service';

@Component({
  selector: 'app-all-incidents',
  templateUrl: './all-incidents.component.html',
  styleUrls: ['./all-incidents.component.css']
})
export class AllIncidentsComponent implements OnInit {

  allIncidents:IncidentObject[];
  type:string="";
  time:string="";
  location:string="";
  description:string="";

  constructor(private http: HttpClient, private router:Router, private incidentService:IncidentService) { }

  ngOnInit() {
     this.http.post('api/queryAllIncidents', {}).subscribe(res=> {
       this.allIncidents = res['incidents'] as IncidentObject[];
       console.log(this.allIncidents);
     })
  }

}