import { Component } from "@angular/core";
import { PROJECTS } from "./mock-projects";
import { NgFor, NgOptimizedImage } from "@angular/common";

@Component({
    selector: 'projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: 'projects.component.css',
    imports: [ NgFor, NgOptimizedImage ]
})
export class ProjectsComponent{
    projects = PROJECTS;
}