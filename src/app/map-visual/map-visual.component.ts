import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-visual',
  templateUrl: './map-visual.component.html',
  styleUrls: ['./map-visual.component.css']
})
export class MapVisualComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    var divElement = document.getElementById('viz1549102256633');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                

  }
}