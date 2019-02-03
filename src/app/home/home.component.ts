import { Component, OnInit } from '@angular/core';
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
  studentPhone: number;
  type: string = "";
  description: string = "";
  comments: string[] = [];
  allIncidents: IncidentObject[];
  personUrl="../assets/images/Person.svg"
  incidentUrl="../assets/images/Exclamation.svg";
  mapStyles = [];

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

  markerMoved(e) {
    this.lat = e.coords.lat;
    this.lng = e.coords.lng;
    console.log(this.lat);
    console.log(this.lng);
  }

  togglePOI() {
    if (this.mapStyles.length == 0) {
      this.mapStyles = [{
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
          ]
      }];
    } else {
      this.mapStyles = [];
    }
  }

  insertIncident() {
    this.http.post('api/insertIncident', {status: true, studentName:this.studentName, studentID:this.studentID, studentPhone: this.studentPhone, type:this.type, time:new Date().toLocaleTimeString(), location:[this.lat.toFixed(5), this.lng.toFixed(5)], description:this.description, comments: this.comments}).subscribe(res => {
      location.reload();
    });
  }
}