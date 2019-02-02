import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NavigateService } from '../navigate.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router, private navigate: NavigateService) { }

  ngOnInit() {
  }
}
