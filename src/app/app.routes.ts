import { RouterModule, Routes } from '@angular/router';
import { PortifolioComponent } from '../core/portifolio/portifolio.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [

    { path: '', component: PortifolioComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }