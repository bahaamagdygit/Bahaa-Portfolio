import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  title = 'portfolio';
}
