import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map!: L.Map;

  ngOnInit() {
    this.initializeMap();
  }//-23.583141199114095, -46.68329034806551

  initializeMap() {
    const center: L.LatLngExpression = [-23.583141199114095, -46.683290348065513]; 
    this.map = L.map('map').setView(center, 15);
   
    

    const redMarkerIcon = L.icon({
      iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-2x-blue.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    L.marker(center, { icon: redMarkerIcon }).addTo(this.map);
    
    

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }
}
