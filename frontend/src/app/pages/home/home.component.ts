import { Component } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private tgService: TelegramService) {
    this.tgService.MainButton.show()
  }
}
