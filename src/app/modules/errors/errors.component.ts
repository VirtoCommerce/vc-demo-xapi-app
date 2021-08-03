import { Component, Input } from '@angular/core';
import { faCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'vc-errors',
  templateUrl: './errors.component.html',
  styleUrls: [
    './errors.component.scss',
  ],
})
export class ErrorsComponent {
  @Input() message = '';

  faTimes = faTimes;

  faCircle = faCircle;
}
