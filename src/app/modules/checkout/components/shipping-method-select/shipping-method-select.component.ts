import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ShippingMethodRecord } from 'src/app/models/cart.model';

@Component({
  selector: 'vc-shipping-method-select',
  templateUrl: './shipping-method-select.component.html',
  styleUrls: [
    './shipping-method-select.component.scss',
  ],
})
export class ShippingMethodSelectComponent {
  faTimes = faTimes;

  faCheck = faCheck;

  @Input() methods: ShippingMethodRecord[] = [];

  @Output() methodSelected = new EventEmitter<ShippingMethodRecord>()

  constructor(
    public readonly activeModal: NgbActiveModal
  ) { }

  selectMethod(method: ShippingMethodRecord): void {
    this.methods.forEach(function (x) {
      x.isActive = false;
    });
    method.isActive = true;
    this.methodSelected.emit(method);
  }
}
