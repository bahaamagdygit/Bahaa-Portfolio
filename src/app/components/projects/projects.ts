import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectService, Project } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements OnInit {
  projects: Project[] = [];
  editingProject: Project | null = null;
  showAddForm = false;
  newProject: Omit<Project, 'id'> = {
    title: '',
    description: '',
    imageUrl: '',
    githubUrl: '',
    demoUrl: '',
    technologies: []
  };

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }

  addProject() {
    this.projectService.addProject(this.newProject);
    this.showAddForm = false;
    this.resetNewProject();
  }

  editProject(project: Project) {
    this.editingProject = { ...project };
  }

  updateProject() {
    if (this.editingProject) {
      this.projectService.updateProject(this.editingProject);
      this.editingProject = null;
    }
  }

  deleteProject(id: number) {
    if (confirm('Are you sure you want to delete this project?')) {
      this.projectService.deleteProject(id);
    }
  }

  cancelEdit() {
    this.editingProject = null;
  }

  resetNewProject() {
    this.newProject = {
      title: '',
      description: '',
      imageUrl: '',
      githubUrl: '',
      demoUrl: '',
      technologies: []
    };
  }
}
