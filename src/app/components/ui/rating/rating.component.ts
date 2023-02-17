import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {
  @Input() maxRating = 5;
  @Input() selectedRating = 0;

  ratingArray = Array(this.maxRating).fill(0);
}
