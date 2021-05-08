import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';
import { CovidCountryData } from 'src/app/models/covid-country-data';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent implements OnInit {

  countryDataList: CovidCountryData[];
  options: L.MapOptions;
  map: L.Map;

  constructor(
    private CovidService:CovidService,
    private activatedRoute:ActivatedRoute
  ) {
    this.countryDataList = this.activatedRoute.snapshot.data['countriesResolved'];
   }

  ngOnInit(): void {
    /*this.CovidService.getCountriesData().subscribe((data:CovidCountryData[])=>{
      this.countryDataList = data;
      console.log('Datos de covid por paises:::',data);
      this.addMarkers();
    });*/
    
    this.options = {
      layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution: '...',
        }),
      ],
      zoom: 6,
      center: L.latLng(40.41, -3.7),
    };
  }

  public onMapReady(map:L.Map){
    this.map=map;
    this.addMarkers();
  }

  public addMarkers() {
    for (let country of this.countryDataList) {
      let marker: L.Marker = L.marker(
        new L.LatLng(country.latitude, country.longitude),
        {
          icon: L.icon({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: 'assets/marker-icon.png',
            shadowUrl: 'assets/marker-shadow.png',
          }),
        }
      );

      marker.bindPopup(this.createPopup(country));
      marker.addTo(this.map);
    }
  }

  public createPopup(country: CovidCountryData): HTMLDivElement {
    let de: HTMLDivElement = document.createElement('div');

    let deContentHTML: string = `<div>
      <div>
        Active: ${country.active}
      </div>
      <div>
        Confirmed: ${country.confirmed}
      </div>
      <div>
        Recovered: ${country.recovered}
      </div>
      <div>
        Deaths: ${country.deaths}
      </div>
    `;
    de.innerHTML = deContentHTML;
    return de;
  }

}
