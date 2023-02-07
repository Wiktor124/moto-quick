import { Component } from '@angular/core';
import { Feature } from '../../interfaces/places';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-serch-results',
  templateUrl: './serch-results.component.html',
  styleUrls: ['./serch-results.component.css']
})
export class SerchResultsComponent {

  public selectedId: string = ''
  
  constructor(
    private placesService: PlacesService,
    private mapSevice: MapService,
    ) {}

  get isLoadingPlaces (): boolean {
    return this.placesService.isLoadingPlaces;
  }

  get places (): Feature[] {
    return this.placesService.places;
  }

  flyTo (place: Feature) {
    this.selectedId = place.id;
    const [lng, lat] = place.center;
    this.mapSevice.flyTo([lng, lat])
  }

  getDirections(place: Feature) {
    if(!this.placesService.userLocation) throw Error("No hay")

    this.placesService.deletePlaces()
    
    const start = this.placesService.userLocation;
    const end = place.center as [number, number];
    this.mapSevice.getRouteBetweenPoints(start, end)
  }

}
