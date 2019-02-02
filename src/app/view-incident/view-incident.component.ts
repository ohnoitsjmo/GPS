import { Component, OnInit } from '@angular/core';
import { IncidentObject } from '../incidentobject';
import { IncidentService } from '../incident.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-view-incident',
  templateUrl: './view-incident.component.html',
  styleUrls: ['./view-incident.component.css']
})
export class ViewIncidentComponent implements OnInit {

  constructor(private incidentService:IncidentService) { }

  incident:IncidentObject;
  lat: number;// = 35.3050;
  lng: number;// = -120.6625;

  ngOnInit() {
      this.incident = this.incidentService.incident;
      this.lat = this.incident.location[0];
      this.lng = this.incident.location[1];
  }

}
