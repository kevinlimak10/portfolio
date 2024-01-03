import { NgModule } from "@angular/core";
import { PortifolioComponent } from "./portifolio.component";
import { AboutModule } from "../about/about.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        PortifolioComponent
    ], imports: [
        AboutModule, RouterModule
    ]
})
export class PortifolioModule { }