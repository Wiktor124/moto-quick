import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BtnMyLocationComponent } from './components/btn-my-location/btn-my-location.component';
import { MyLogoComponent } from './components/my-logo/my-logo.component';
import { SerchBarComponent } from './components/serch-bar/serch-bar.component';
import { SerchResultsComponent } from './components/serch-results/serch-results.component';
import { FeeComponent } from './components/fee/fee.component';
import { BtnFeeComponent } from './components/btn-fee/btn-fee.component';



@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewComponent,
    LoadingComponent,
    BtnMyLocationComponent,
    MyLogoComponent,
    SerchBarComponent,
    SerchResultsComponent,
    FeeComponent,
    BtnFeeComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapScreenComponent
  ]
})
export class MapsModule { }
