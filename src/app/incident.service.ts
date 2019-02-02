import { Injectable } from '@angular/core';
import { IncidentObject } from './incidentobject';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

    incident:IncidentObject;

  constructor(private router:Router) { }

  incidentView(incident:IncidentObject) {
      this.incident = incident;
    this.router.navigate(['view/' + incident._id]);
  }
}
