import { Component, OnInit } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { HeaderComponent } from "../../components/header/header.component";
import { InfiniteClientsComponent } from "../../components/infinite-clients/infinite-clients.component";
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { CarouselService } from '../../components/carousel/carousel.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    InfiniteClientsComponent,
    CarouselComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  public carouselItems: any[] = []

  constructor(
    private carouselService: CarouselService,
    private tgService: TelegramService) {
    this.tgService.MainButton.show()
  }

  public async ngOnInit(): Promise<void> {
     // Написать ассинхронный запрос на сервер
    this.carouselItems = await this.carouselService.getCarouselItems();
  }
}
