import { Component, OnInit } from '@angular/core'
import { ObservableService } from '../../services'

@Component({
  selector: 'app-fee',
  templateUrl: './fee.component.html',
  styleUrls: ['./fee.component.css'],
})
export class FeeComponent implements OnInit {
  
  public fee = 0;
  public number: number;
  public kms = 0;

  constructor(private observable: ObservableService) {
    this.number = Number(localStorage.getItem('moto-quick-fee'))
  }
  
  ngOnInit(): void {
    this.observable.triggerOfData.subscribe((data) => {
      console.log('recibiendo data', data)
      this.fee = Math.round(this.number * data);
      this.kms = data;
    })
    // console.log('Fee', this.fee);
  }
}
