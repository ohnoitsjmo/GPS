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
  lat: number = 35.3050;
  lng: number = -120.6625;
  incidentUrl="../assets/images/Exclamation.svg";

  constructor(public incidentService:IncidentService) { }

  ngOnInit() {
      this.lat = Number(this.incidentService.incident.location[0]);
      this.lng = Number(this.incidentService.incident.location[1]);
  }

}
