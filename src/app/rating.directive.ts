import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appRating]'
})
export class RatingDirective {

  @Input() rates: number;

  constructor() { }


}
