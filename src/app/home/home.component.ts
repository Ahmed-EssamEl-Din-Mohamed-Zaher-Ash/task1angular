import { Component } from '@angular/core';
import { LazyloadingComponent } from '../lazyloading/lazyloading.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LazyloadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
