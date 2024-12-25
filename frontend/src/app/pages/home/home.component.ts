import { Component } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import {HeaderComponent} from "../../components/header/header.component";
import {InfiniteClientsComponent} from "../../components/infinite-clients/infinite-clients.component";
import {CarouselComponent} from "../../components/carousel/carousel.component";

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
export class HomeComponent {
  constructor(
    private tgService: TelegramService,
  ) {
    this.tgService.MainButton.show()
  }
}
