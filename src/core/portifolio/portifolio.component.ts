import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AboutComponent } from "../about/about.component";

@Component({
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        AboutComponent
    ],
    selector: 'portifolio',
    templateUrl: './portifolio.component.html'
})
export class PortifolioComponent {

}