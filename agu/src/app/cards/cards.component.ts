import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cards=[
   {
    src:"https://tse4.mm.bing.net/th?id=OIP.uuenG_U1A_zCkzFaAV2xtAHaEC&pid=Api&P=0&h=180",
    alt:"image",
    title:"FOOD",
    price:20,
    btn:"Order now",

  },
  {
    src:"https://tse4.mm.bing.net/th?id=OIP.uuenG_U1A_zCkzFaAV2xtAHaEC&pid=Api&P=0&h=180",
    alt:"image",
    title:"FOOD",
    price:20,
    btn:"Order now"
  }
  ]
}
