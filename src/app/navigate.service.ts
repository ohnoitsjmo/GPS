import { Injectable } from '@angular/core';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  constructor(private router: Router) { }

  navigateHome() {
    this.router.navigate(['']);
  }

  navigateIncidents() {
    this.router.navigate(['all_incidents']);
  }

  navigateMap() {
    this.router.navigate(['map_visual']);
  }

  navigateBar() {
    this.router.navigate(['bar_chart']);
  }
}
