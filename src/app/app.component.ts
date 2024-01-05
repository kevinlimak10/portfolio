import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule ],
  template: `
  <main id="cloud-container">
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
}
