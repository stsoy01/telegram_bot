import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["header.component.scss"],
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  standalone: true
})

export class HeaderComponent {

  public searchNavbarInput(event: any): void {
    // console.log(event);
  }

  public setTheme(event: any): void {
    document.body.setAttribute('theme', !event.target.checked ? 'dark' : 'light');
  }
}
