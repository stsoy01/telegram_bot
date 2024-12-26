import {
  AfterViewChecked,
  Component,
  Input
} from "@angular/core";
import { NgClass } from "@angular/common";
import { CarouselList } from "./types/carousel.types";
import { CarouselService } from "./carousel.service";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  imports: [
    NgClass
  ],
  standalone: true
})

export class CarouselComponent {

  @Input({ alias: 'carouselItems', required: true }) carouselItems: CarouselList[] = [];
  @Input({required: true}) carouselId!: string;

  constructor(private service: CarouselService) { 
  }

  public get getCarouselAttr(): string {
    return `#${this.carouselId}`;
  }
}
