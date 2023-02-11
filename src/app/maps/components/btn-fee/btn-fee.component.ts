import { Component, OnInit} from '@angular/core'
import { ObservableService } from '../../services';

@Component({
  selector: 'app-btn-fee',
  templateUrl: './btn-fee.component.html',
  styleUrls: ['./btn-fee.component.css'],
  
})

export class BtnFeeComponent {
  public buttonActive = false;
  public feeActive  = true;
  
  public isButtonAddEnabled = false;

  public fee: number;

  constructor(private observable: ObservableService) {
    this.fee = Number(localStorage.getItem('moto-quick-fee')) | 0;
  }
  
  toggleActiveClass() {
    this.buttonActive = !this.buttonActive
    this.feeActive = !this.feeActive
  }

  toggleButtonEnable() {
    this.isButtonAddEnabled = !this.isButtonAddEnabled;
  }

  submitForm(event: any, form: any, text: string = '') {
    event.preventDefault();
    this.toggleButtonEnable()
    localStorage.setItem('moto-quick-fee', text);
    this.getNewFee()
    // console.log(localStorage.getItem('moto-quick-fee'));

    form.reset();
  }

  getNewFee() {
   this.fee = Number( localStorage.getItem('moto-quick-fee'))
  }

}
