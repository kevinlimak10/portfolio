import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { PortifolioModule } from "../core/portifolio/portifolio.module";
import { AppRoutingModule } from "./app.routes";

@NgModule({
    declarations: [
        AppComponent
    ], imports: [
        CommonModule, AppRoutingModule, PortifolioModule
    ]
})
export class AppModule { }