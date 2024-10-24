import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navbar={
    logo:"mani",
    item1:"home",
    item2:"about",
    item3:"account",
    item4:"profile",
  }
  mani={
    src:"https://tse3.mm.bing.net/th?id=OIP.oDu9P-hCFiLUEkTb3uuN-QHaHa&pid=Api&P=0&h=180",
    alt:"logo",
  }

}
