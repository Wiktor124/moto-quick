import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1Ijoid2lrdG9yMTI0IiwiYSI6ImNsZGk0bnVlbDAwZGszb29obW16cGVrMngifQ.4vjH-YoBmKs3loy7d-2Spw';

if(!navigator.geolocation) {
  alert('Navegador no soporta Geolocalización')
  throw new Error('No soporta Geolocalización');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
