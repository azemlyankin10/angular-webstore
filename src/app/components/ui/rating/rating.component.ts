import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {
    @Input() maxrating = 5;
    @Input() selectedrating = 0;

    ratingArray = Array(this.maxrating).fill(0);
}
