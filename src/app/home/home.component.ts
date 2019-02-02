import { Component, OnInit, AfterViewInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IncidentObject } from '../incidentobject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lat: number = 35.3050;
  lng: number = -120.6625;
  title: string = 'PolySafe';
  isTracking: boolean = false;
  incident: IncidentObject;
  studentName: string = "";
  studentID: number;
  type: string = "";
  description: string = "";
  allIncidents: IncidentObject[];
  personUrl="../assets/images/Person.svg"
  incidentUrl="../assets/images/Exclamation.svg";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.post('api/queryActiveIncidents', {}).subscribe(res => {
      this.allIncidents = res['incidents'] as IncidentObject[];
      if (navigator.geolocation) {
        this.isTracking = true;
        navigator.geolocation.getCurrentPosition((position) => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
        }, this.error, {enableHighAccuracy: true});
      } else {
        alert("Geolocation is not supported by this browser.");
      }     
    })
  }

  error(err) {
    console.log('err');
  }

  insertIncident() {
    this.http.post('api/insertIncident', {status: true, studentName:this.studentName, studentID:this.studentID, type:this.type, time:Date(), location:[this.lat.toFixed(2), this.lng.toFixed(2)], description:this.description}).subscribe(res => {
    });
  }
}