import {
  Component,
  Input
} from "@angular/core";
import {
  NgClass,
  NgStyle
} from "@angular/common";
import {CarouselList} from "./types/carousel.types";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  imports: [
    NgClass,
    NgStyle
  ],
  standalone: true
})

export class CarouselComponent {

  @Input({alias: 'carouselItems', required: true}) carouselItems: CarouselList[] = [];
  @Input({required: true}) carouselId!: string;
  @Input() public readonly isRounded: boolean = true;

  constructor() {
  }

  public get getCarouselAttr(): string {
    return `#${this.carouselId}`;
  }
}
