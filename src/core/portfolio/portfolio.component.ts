import { Component } from "@angular/core";
import { CommonModule, NgIf } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AboutComponent } from "../about/about.component";
import { ResumeComponent } from "../resume/resume.component";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProjectsComponent } from "../projects/projects.component";
import { StatePortfolio } from "../../domain/state.portfolio";

@Component({
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        AboutComponent,
        ResumeComponent,
        ProjectsComponent,
        MatButtonModule, 
        MatIconModule,
        NgIf,
    ],
    selector: 'portfolio',
    styleUrl: './portfolio.component.css',
    templateUrl: './portfolio.component.html'
})
export class PortfolioComponent {

    state:StatePortfolio = { 'about': true, 'resume': false, 'projects': false }

    actionChangeState(value:String){
        this.state[value as keyof StatePortfolio] = !this.state[value as keyof StatePortfolio];
    }

}