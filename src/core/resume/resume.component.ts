import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { EXPERIENCES } from "./mock-resume";

@Component({
    selector: 'resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css'],
    standalone: true,
    imports: [
        NgFor
    ]
})
export class ResumeComponent {
    experiences = EXPERIENCES;
}