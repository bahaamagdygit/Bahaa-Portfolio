import { Component } from '@angular/core';
import { Header } from '../header/header';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Header],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class About {
  // About component logic
}
