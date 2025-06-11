import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Experience } from './components/experience/experience';
import { Education } from './components/education/education';
import { Contact } from './components/contact/contact';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    Header,
    About,
    Skills,

    Navbar
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  title = 'portfolio';
}
