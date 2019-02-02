import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateAllIncidents() {
    this.router.navigate(['/all_incidents']);
  }

  navigateMapVisual() {
    this.router.navigate(['/map_visual']);
  }

}
