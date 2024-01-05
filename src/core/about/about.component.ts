import { Component } from "@angular/core";
import { CommonModule, NgOptimizedImage } from '@angular/common'


@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: true, 
    imports: [ CommonModule, NgOptimizedImage ] 
})
export class AboutComponent {

}