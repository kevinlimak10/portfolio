import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from '../core/portfolio/portfolio.component';

export const routes: Routes = [

  { path: '', component: PortfolioComponent, title: 'Portfolio' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
