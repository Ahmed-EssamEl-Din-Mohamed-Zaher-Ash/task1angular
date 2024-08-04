import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive,VideoComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
}
