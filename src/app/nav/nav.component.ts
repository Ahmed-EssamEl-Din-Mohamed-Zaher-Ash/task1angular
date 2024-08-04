import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
interface list {
  name: string;
  routerName: string
}
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  isClicked: boolean = false;
  lists: list[] = [
    { name: "Home", routerName: "home" },
    { name: "About", routerName: "about" },
    { name: "portfolio", routerName: "portfolio" },
    { name: "contact", routerName: "contact" },
  ]
  togol() {
    this.isClicked = !this.isClicked;
  }
}
