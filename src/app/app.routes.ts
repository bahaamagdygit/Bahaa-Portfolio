import { Routes } from '@angular/router';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Experience } from './components/experience/experience';
import { Education } from './components/education/education';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: About },
  { path: 'skills', component: Skills },
  { path: 'projects', component: Projects },
  { path: 'experience', component: Experience },
  { path: 'education', component: Education },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
