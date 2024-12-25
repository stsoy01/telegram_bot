import {Injectable} from "@angular/core";
import {CarouselList} from "./types/carousel.types";

@Injectable({providedIn: 'root'})

export class CarouselService {

  public async getCarouselItems(): Promise<CarouselList[]> {
    return [
      {
        title: 'First slide label',
        description: 'Some representative placeholder content for the first slide.',
        imgUrl: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/autumn-wallpaper-free-image.jpg?w=2210&quality=70',
        itemInterval: '10000'
      },
      {
        title: 'Second slide label',
        description: 'Some representative placeholder content for the first slide.',
        imgUrl: 'https://images.unsplash.com/photo-1491466424936-e304919aada7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MTkyMHgxMDgwJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww',
        itemInterval: '5000'
      },
      {
        title: 'Third slide label',
        description: 'Some representative placeholder content for the first slide.',
        imgUrl: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGJhY2tncm91bmRzfGVufDB8fDB8fHww',
        itemInterval: '5000'
      }
    ]
  }
}
