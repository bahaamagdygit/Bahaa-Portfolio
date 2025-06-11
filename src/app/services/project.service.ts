import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  demoUrl: string;
  technologies: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce (Jumia Clone)',
      description: 'Built with Angular 14+ and .NET Core API, featuring JWT auth and responsive UI. Improved page load speed by 40% via lazy loading modules.',
      imageUrl: 'assets/images/jumia-clone.jpg',
      githubUrl: '#',
      demoUrl: '#',
      technologies: ['Angular', '.NET Core', 'JWT', 'TypeScript']
    },
    {
      id: 2,
      title: 'Library Management System',
      description: 'Developed using ASP.NET Core MVC with Onion Architecture. Reduced SQL queries by 30% using EF Core optimizations.',
      imageUrl: 'assets/images/library-system.jpg',
      githubUrl: '#',
      demoUrl: '#',
      technologies: ['ASP.NET Core', 'MVC', 'Entity Framework', 'C#']
    }
  ];

  private projectsSubject = new BehaviorSubject<Project[]>(this.projects);

  constructor() { }

  getProjects(): Observable<Project[]> {
    return this.projectsSubject.asObservable();
  }

  addProject(project: Omit<Project, 'id'>): void {
    const newProject = {
      ...project,
      id: this.projects.length + 1
    };
    this.projects.push(newProject);
    this.projectsSubject.next(this.projects);
  }

  updateProject(project: Project): void {
    const index = this.projects.findIndex(p => p.id === project.id);
    if (index !== -1) {
      this.projects[index] = project;
      this.projectsSubject.next(this.projects);
    }
  }

  deleteProject(id: number): void {
    this.projects = this.projects.filter(p => p.id !== id);
    this.projectsSubject.next(this.projects);
  }
}
