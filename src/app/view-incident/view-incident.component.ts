import { Component, OnInit } from '@angular/core';
import { IncidentObject } from '../incidentobject';
import { IncidentService } from '../incident.service';

@Component({
  selector: 'app-view-incident',
  templateUrl: './view-incident.component.html',
  styleUrls: ['./view-incident.component.css']
})
export class ViewIncidentComponent implements OnInit {

  constructor(private incidentService:IncidentService) { }

  incident:IncidentObject;

  ngOnInit() {
      this.incident = this.incidentService.incident;
  }

}
