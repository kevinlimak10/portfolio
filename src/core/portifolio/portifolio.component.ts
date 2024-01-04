import { Component } from "@angular/core";
import { CommonModule, NgIf } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AboutComponent } from "../about/about.component";
import { StatePortifolio } from "../../domain/state.portifolio";
import { ResumeComponent } from "../resume/resume.component";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ProjectsComponent } from "../projects/projects.component";

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
    selector: 'portifolio',
    styleUrl: './portifolio.component.css',
    templateUrl: './portifolio.component.html'
})
export class PortifolioComponent {

    state:StatePortifolio = { 'about': true, 'resume': false, 'projects': false }

    actionChangeState(value:String){
        this.state[value as keyof StatePortifolio] = !this.state[value as keyof StatePortifolio];
        
    }

}