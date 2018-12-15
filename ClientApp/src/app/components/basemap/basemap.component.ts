import { Component, OnInit } from '@angular/core';

import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZSource from 'ol/source/XYZ';
import { fromLonLat } from 'ol/proj';

@Component({
  selector: 'basemap',
  templateUrl: './basemap.component.html',
  styleUrls: ['./basemap.component.css']
})
export class BasemapComponent implements OnInit {

  map: Map;

  constructor() { }

  ngOnInit() {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZSource({
            url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg'
          })
        })
      ],
      view: new View({
        center: fromLonLat([ -115.0, 54.5]),
        zoom: 6
      })
    });
  }

}
