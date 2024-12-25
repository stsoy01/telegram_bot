import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import {BackButtonInterface, ButtonInterface} from "../../shared/interfaces/button.interface";


@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private window!: any
  public tg!: any;

  constructor(@Inject(DOCUMENT) private _document: any) {
    this.window = this._document.defaultView;
    this.tg = this.window.Telegram.WebApp
  }

  get MainButton(): ButtonInterface {
    return this.tg.MainButton
  }

  get BackButton(): BackButtonInterface {
    return this.tg.BackButton;
  }

  public setMainButtonText(): void {

  }
}
