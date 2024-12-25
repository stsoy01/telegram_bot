import {
  Component,
  OnInit
} from "@angular/core";
import {NgClass} from "@angular/common";
import {CarouselList} from "./types/carousel.types";
import {CarouselService} from "./carousel.service";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  imports: [
    NgClass
  ],
  standalone: true
})

export class CarouselComponent  implements OnInit {

  public carouselItems: CarouselList[] = [];

  constructor(private service: CarouselService) {
  }

  public async ngOnInit(): Promise<void> {
    // Написать ассинхронный запрос на сервер
    this.carouselItems = await this.service.getCarouselItems();
  }

}
