import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core'
import { Map, Popup, Marker } from 'mapbox-gl'
import { PlacesService, MapService } from '../../services'

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor(
    private placeService: PlacesService,
    private mapService: MapService 
    ) {}

  ngAfterViewInit(): void {
    if (!this.placeService.userLocation) throw Error('No hay placesService.userLocation')

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.placeService.userLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
    })

    const popUp = new Popup()
    .setHTML(
      `
        <h6>Aquí toy</h6>
        <span>Breteando en la mostra...</span>
      ` 
    );


    new Marker({color: 'red'})
    .setLngLat(this.placeService.userLocation)
    .setPopup(popUp)
    .addTo(map)
    
    this.mapService.setMap(map)
  }
}
