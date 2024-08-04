import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-lazy-child',
  standalone: true,
  imports: [],
  templateUrl: './lazy-child.component.html',
  styleUrl: './lazy-child.component.css'
})
export class LazyChildComponent {
@Input() dataFromParent!:any[]
  constructor() { }
}
