import {Component} from '@angular/core';
import {TelegramService} from "../../services/telegram.service";


@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {

  constructor(
    private telegramService: TelegramService
  ) {
    this.telegramService.MainButton.show()
  }
}
