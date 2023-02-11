import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  @Output() triggerOfData: EventEmitter<any> = new EventEmitter();  
}